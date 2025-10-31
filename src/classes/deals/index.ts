import { DocumentSchema, FunnelStages } from "../../types";
import { Model } from "../model";


export type Deal = {
  company: string;
  noteFromFounder?: string;
  tenant: string;
  stage: FunnelStages;
  addedBy: string; // user id
  utm?: {
    source?: string | null;
    [key: string]: unknown;
  } | null;
} & DocumentSchema;


export class DealModel extends Model<Deal> {
}