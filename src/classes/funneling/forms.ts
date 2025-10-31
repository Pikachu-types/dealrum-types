import { DocumentSchema, FormFieldType } from "../..";


export type FunnelConfig = {
  updatedBy?: string;
  sections: {
    [key: string]: {
      default: boolean;
      position: number;
      fields: {
        name: string;
        default?: boolean;
        label: string;
        required: boolean;
        placeholder?: string;
        value: string;
        description?: string;
        type: FormFieldType;
        options?: {
          label: string;
          value: string;
        }[];
        order: number;
        iat: number;
        source?: "internal";
        file?: {
          type: "image" | "pdf";
        };
        min?: number;
        max?: number;
      }[];
    }
  }
} & DocumentSchema;