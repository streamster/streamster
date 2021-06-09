const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

const argTypeLookups = {
  dateFormat: 'string',
  fields: 'string[]',
  locationSearch: 'QueryParameter<Location>',
  pageSize: 'number',
  pageIndex: 'number',
  apiKey: 'string',
};

class SDKBuilder {
  constructor() {
    this.baseUrl = 'https://dwr.state.co.us';
    this.entryUrl =
      'https://dwr.state.co.us/rest/get/help#Datasets&#All&#gettingstarted&#jsonxml';
    this.services = [];
  }

  async requestPage(url) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getServices() {
    const html = await this.requestPage(this.entryUrl);
    const $ = cheerio.load(html);
    const services = $('#apiNavPillsTable a[role="tab"]')
      .map((_, el) => {
        const name = $(el).text();
        let serviceId = '';
        const controllerId = `${name.replace(/ /g, '')}Controller`;
        const subServices = $(`#${controllerId} .help-page-table`)
          .find('tbody tr')
          .map((_, el) => {
            const endpoint = $(el)
              .find('.api-name a')
              .text()
              .replace('GET ', '');
            const name = $(el)
              .find('.url-generator a')
              .text()
              .replace(' Generator', '');
            const generator = $(el)
              .find('.url-generator a')
              .attr('href');
            serviceId = endpoint.replace('api/v2/', '').split('/')[0];
            const subServiceId = endpoint.replace('api/v2/', '').split('/')[1];
            return {
              id: subServiceId,
              name,
              endpoint,
              generator,
            };
          })
          .get();
        return {
          id: serviceId,
          name: name,
          controller: controllerId,
          subServices,
        };
      })
      .get()
      .filter(({ name }) => name !== 'All');
    this.services = services;
    return services;
  }

  async createBaseTypes() {
    await this.getServices();
    const baseTypes = fs.readFileSync('./templates/baseTypes.ts');
    return baseTypes;
  }

  async createServiceTypes() {
    await this.getServices();
    const validServices = this.services.map(({ id }) => `'${id}'`).join(' | ');
    const validSubServices = this.services
      .map(service => {
        return service.subServices.map(({ id }) => `'${id}'`).join(' | ');
      })
      .flat()
      .join(' | ');
    return `\nexport type Services = ${validServices}\n\nexport type SubServices = ${validSubServices}\n`;
  }

  async createQueryParameterTypes() {
    const queryParameters = [this.services[10]].map(service => {
      return [service.subServices[2]].map(async subService => {
        const subServiceHTML = await this.requestPage(
          `${this.baseUrl}${subService.generator}`
        );
        const $ = cheerio.load(subServiceHTML);
        const $arguments = $(
          '#mainContainer > table:nth-child(1) > tbody:nth-child(2) tr'
        );
        const args = $arguments
          .map((_, el) => {
            const name = $(el)
              .find('td:first-child label')
              .text()
              .trim();
            const operatorText = $(el)
              .find('td:nth-child(3)')
              .text();
            let operatorType = '';
            if (operatorText.includes('json')) {
              if (operatorText.includes('geojson')) {
                operatorType = 'formatAdvanced';
              } else {
                operatorType = 'formatBasic';
              }
            } else if (
              operatorText.includes('Text:') ||
              operatorText.includes('Date:') ||
              operatorText.includes('Matches:')
            ) {
              operatorType = 'string';
            } else if (operatorText.includes('Number:')) {
              operatorType = 'number';
            } else if (operatorText.includes('Yes')) {
              operatorType = 'boolean';
            } else {
              operatorType = 'string';
            }
            return {
              name,
              operatorType,
            };
          })
          .get();
        const interfaceName = `Get${subService.name
          .replace(/ /g, '')
          .replace(/-/g, '')}QueryParameters`;
        let interfaceStr = `\nexport interface ${interfaceName} {\n`;
        args.forEach(({ name, operatorType }) => {
          if (name === 'format') {
            if (operatorType === 'formatAdvanced') {
              interfaceStr += '\tformat?: AdvancedFormats;\n';
            } else {
              interfaceStr += '\tformat?: BaseFormats;\n';
            }
          } else if (name === 'encoding') {
            interfaceStr += `\tencoding?: Encodings;\n`;
          } else if (argTypeLookups[name]) {
            if (name === 'locationSearch') {
              interfaceStr += `\tlocation?: ${argTypeLookups[name]};\n`;
            } else {
              interfaceStr += `\t${name}?: ${argTypeLookups[name]};\n`;
            }
          } else {
            interfaceStr += `\t${name}?: QueryParameter<${operatorType}>;\n`;
          }
        });
        interfaceStr += '\n}\n';
        return interfaceStr;
      });
    });
    const final = await Promise.all([...queryParameters].flat());
    return final.join('');
  }

  async createServiceInterface() {
    const baseInterface = `\nexport interface SurfaceWaterService {
      validate<T>(
        queryParameters: T,
        schema: GenericObject
      ):
        | boolean
        | ErrorObject<string, Record<string, any>, unknown>[]
        | null
        | undefined;
      prepareUrl<T>(
        service: Services,
        subService: SubServices,
        queryParameters: T
      ): string;\n`;

    const services = [this.services[10]].map(service => {
      return [service.subServices[2]].map(async subService => {
        const methodName = `get${subService.name
          .replace(/ /g, '')
          .replace(/-/g, '')}`;
        const queryParameterName = `Get${subService.name
          .replace(/ /g, '')
          .replace(/-/g, '')}`;
        const methodStr = `${methodName}(config: QueryArgs<${queryParameterName}QueryParameters>): Promise<any>;`;
        return methodStr;
      });
    });
    let final = await Promise.all([...services].flat());
    final = final.join('');
    final = baseInterface + final + '\n}\n\n';

    final += `export interface DwrService {
      surfaceWater(): SurfaceWaterService;
    }`;
    return final;
  }

  async writeTypes() {
    let types = '';
    types += await this.createBaseTypes();
    types += await this.createServiceTypes();
    types += await this.createQueryParameterTypes();
    types += await this.createServiceInterface();
    fs.writeFileSync('./types.ts', types);
  }
}

const sdk = new SDKBuilder();
sdk.writeTypes();

// export default SDKBuilder;
