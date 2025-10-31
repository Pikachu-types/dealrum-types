import { DocumentSchema, FunnelStages } from "../../types";
import { Model } from "../model";
export type Deal = {
    company: string;
    noteFromFounder?: string;
    tenant: string;
    stage: FunnelStages;
    addedBy: string;
    utm?: {
        source?: string | null;
        [key: string]: unknown;
    } | null;
} & DocumentSchema;
export declare class DealModel extends Model<Deal> {
}
