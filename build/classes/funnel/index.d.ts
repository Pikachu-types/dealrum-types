import { Company, Includer } from "..";
export interface FunnelStage {
    id: string;
    name: string;
    color: string;
    order: number;
    count: number;
    isCustom?: boolean;
}
export interface FunnelData {
    stages: FunnelStage[];
    companies: Company[];
}
export type StartupInclusion = {
    startup: Company;
    includer: Includer;
};
