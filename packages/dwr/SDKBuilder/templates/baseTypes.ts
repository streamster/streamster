import { ErrorObject } from "ajv";
export type GenericObject = { [key: string]: any };
export type StreamsterFormats = "raw" | "pretty";
export type BaseFormats = "json" | "xml" | "csv" | "tsv";
export type AdvancedFormats = BaseFormats | "geojson";
export type Encodings = "gzip" | "deflate";

export type StringOperators = "equal" | "contains" | "startsWith" | "endsWith";
export type NumericOperators = "equal" | "min" | "max";
export type DateOperators = "equal" | "min" | "max";
export interface LocationSearch {
  latitude: number;
  longitude: number;
  radius: number;
  units: "feet" | "miles";
}

export type QueryParameter<T> =
  | T
  | {
      [key in StringOperators]?: T;
    }
  | {
      [key in NumericOperators]?: T;
    }
  | {
      [key in DateOperators]?: T;
    };

export interface QueryArgs<T> {
  format?: StreamsterFormats;
  queryParameters: T;
}

export interface SetRequestArgs<T> {
  queryParameters: T;
  schema: GenericObject;
  subService: SubServices;
}
