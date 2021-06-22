const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const Analytics = require("./analytics");

const analytics = new Analytics();

const argTypeLookups = {
  dateFormat: "string",
  fields: "string[]",
  locationSearch: "QueryParameter<Location>",
  pageSize: "number",
  pageIndex: "number",
  apiKey: "string"
};

function setPath(pathName) {
  return path.join(__dirname, pathName);
}

const filePaths = {
  read: setPath("/templates/baseTypes.ts"),
  write: setPath("/types.ts")
};

class SDKBuilder {
  constructor() {
    this.baseUrl = "https://dwr.state.co.us";
    this.entryUrl =
      "https://dwr.state.co.us/rest/get/help#Datasets&#All&#gettingstarted&#jsonxml";
    this.services = [];
  }

  async requestPage(url) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      // eslint-disable-next-line
      return console.error("error", err);
    }
  }

  async getServices() {
    const html = await this.requestPage(this.entryUrl);
    const $ = cheerio.load(html);
    const services = $('#apiNavPillsTable a[role="tab"]')
      .map((_, service) => {
        const name = $(service).text();
        let serviceId = "";
        const controllerId = `${name.replace(/ /g, "")}Controller`;
        const subServices = $(`#${controllerId} .help-page-table`)
          .find("tbody tr")
          .map((_i, subService) => {
            const endpoint = $(subService)
              .find(".api-name a")
              .text()
              .replace("GET ", "");
            const subServiceName = $(subService)
              .find(".url-generator a")
              .text()
              .replace(" Generator", "");
            const generator = $(subService)
              .find(".url-generator a")
              .attr("href");
            serviceId = endpoint.replace("api/v2/", "").split("/")[0];
            const subServiceId = endpoint.replace("api/v2/", "").split("/")[1];
            return {
              id: subServiceId,
              name: subServiceName,
              endpoint,
              generator
            };
          })
          .get();
        return {
          id: serviceId,
          name,
          controller: controllerId,
          subServices
        };
      })
      .get()
      .filter(({ name }) => name !== "All");
    this.services = services;
    return services;
  }

  async createBaseTypes() {
    analytics.log("start", "Creating base type definitions.");
    await this.getServices();
    const baseTypes = fs.readFileSync(filePaths.read);
    analytics.log("success", "Creating base type definitions.");
    return baseTypes;
  }

  async createServiceTypes() {
    await this.getServices();
    const validServices = this.services.map(({ id }) => `'${id}'`).join(" | ");
    const validSubServices = this.services
      .map((service) => {
        analytics.log("info", `${service.name} service type definitions`);
        return service.subServices.map(({ id }) => `'${id}'`).join(" | ");
      })
      .flat()
      .join(" | ");
    analytics.log("success", "Creating service type definitions.");
    return `\nexport type Services = ${validServices}\n\nexport type SubServices = ${validSubServices}\n`;
  }

  async createQueryParameterTypes() {
    analytics.log("start", "Creating query parameter type definitions.");
    const queryParameters = this.services.map((service) =>
      service.subServices.map(async (subService) => {
        const subServiceHTML = await this.requestPage(
          `${this.baseUrl}${subService.generator}`
        );
        const $ = cheerio.load(subServiceHTML);
        const $arguments = $(
          "#mainContainer > table:nth-child(1) > tbody:nth-child(2) tr"
        );
        const args = $arguments
          .map((_, el) => {
            const name = $(el)
              .find("td:first-child label")
              .text()
              .trim();
            const operatorText = $(el)
              .find("td:nth-child(3)")
              .text();
            let operatorType = "";
            if (operatorText.includes("json")) {
              if (operatorText.includes("geojson")) {
                operatorType = "formatAdvanced";
              } else {
                operatorType = "formatBasic";
              }
            } else if (
              operatorText.includes("Text:") ||
              operatorText.includes("Date:") ||
              operatorText.includes("Matches:")
            ) {
              operatorType = "string";
            } else if (operatorText.includes("Number:")) {
              operatorType = "number";
            } else if (operatorText.includes("Yes")) {
              operatorType = "boolean";
            } else {
              operatorType = "string";
            }
            return {
              name,
              operatorType
            };
          })
          .get();
        const interfaceName = `Get${subService.name
          .replace(/ /g, "")
          .replace(/-/g, "")}QueryParameters`;
        let interfaceStr = `\nexport interface ${interfaceName} {\n`;
        args.forEach(({ name, operatorType }) => {
          if (name === "format") {
            if (operatorType === "formatAdvanced") {
              interfaceStr += "\tformat?: AdvancedFormats;\n";
            } else {
              interfaceStr += "\tformat?: BaseFormats;\n";
            }
          } else if (name === "encoding") {
            interfaceStr += "\tencoding?: Encodings;\n";
          } else if (argTypeLookups[name]) {
            if (name === "locationSearch") {
              interfaceStr += `\tlocation?: ${argTypeLookups[name]};\n`;
            } else {
              interfaceStr += `\t${name}?: ${argTypeLookups[name]};\n`;
            }
          } else {
            interfaceStr += `\t${name}?: QueryParameter<${operatorType}>;\n`;
          }
        });
        interfaceStr += "\n}\n";
        return interfaceStr;
      })
    );
    const final = await Promise.all([...queryParameters].flat());
    analytics.log("success", "Creating query parameter type definitions.");
    return final.join("");
  }

  async createServiceInterfaces() {
    analytics.log("start", "Creating service interface definitions");
    const services = this.services.map((service) => {
      const baseInterface = `\nexport interface ${service.name.replace(
        / /g,
        ""
      )}Service {
        validate<T>(
          queryParameters: T,
          schema: GenericObject
        ):
          | boolean
          | ErrorObject[]
          | null
          | undefined;
        prepareUrl<T>(
          service: Services,
          subService: SubServices,
          queryParameters: T
        ): string;\n`;
      const subServices = service.subServices.map((subService) => {
        const methodName = `get${subService.name
          .replace(/ /g, "")
          .replace(/-/g, "")}`;
        const queryParameterName = `Get${subService.name
          .replace(/ /g, "")
          .replace(/-/g, "")}`;
        const methodStr = `\n\t${methodName}(config: QueryArgs<${queryParameterName}QueryParameters>): Promise<any>;\n`;
        return methodStr;
      });
      return `${baseInterface + subServices.join("")}\n}\n\n`;
    });
    let final = await Promise.all([...services].flat());
    final = final.join("");
    analytics.log("success", "Creating service interface definitions.");
    return final;
  }

  async createDwrService() {
    analytics.log("start", "Creating DWR service interface definition.");
    const baseInterface = `export interface DwrService {\n\t`;
    const services = this.services.map((service) => {
      const serviceName = service.name.replace(/ /g, "");
      const finalServiceName =
        serviceName.charAt(0).toLowerCase() + serviceName.substring(1);
      return `${finalServiceName}(): ${serviceName}Service;`;
    });
    let final = baseInterface + services.flat().join("\n\t");
    final += "\n}\n";

    analytics.log("success", "Creating DWR service interface definition.");
    return final;
  }

  async writeTypes() {
    analytics.log("start", "Generating type definitions.");
    let types = "";
    types += await this.createBaseTypes();
    types += await this.createServiceTypes();
    types += await this.createQueryParameterTypes();
    types += await this.createServiceInterfaces();
    types += await this.createDwrService();
    fs.writeFileSync(filePaths.write, types);
    analytics.log("success", "Generating type definitions.");
  }
}

const sdk = new SDKBuilder();
sdk.writeTypes();

module.exports = SDKBuilder;
