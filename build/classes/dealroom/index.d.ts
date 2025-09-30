import { DealroomType, DocumentSchema, reactSelectOptionsType } from "../..";
import { Model } from "../model";
export type Dealroom = {
    slug: string;
    owner: string;
    logo?: string | null | undefined;
    name: string;
    oneLiner: string;
    classification: DealroomType;
    currency: string;
    location: [string, string?];
    discoverable: boolean;
    reference: any;
    billing?: {
        email: string;
        currency: string;
    } | null;
    deactivated: boolean | null | undefined;
    investmentCount: string;
    minInvestment: number;
    maxInvestment: number;
    roundMin: number;
    roundMax: number;
    leadBefore: string;
    minMrr: number;
    maxMrr: number;
    syndicates: string;
    stages: string[];
    categories: string[];
    businessType: string[];
    industries: reactSelectOptionsType[];
    technologies: reactSelectOptionsType[];
    industryInterests: reactSelectOptionsType[];
    countryInterests: reactSelectOptionsType[];
    expertise: reactSelectOptionsType[];
    ethos: string;
    yourWhy: string;
    teamUids?: string[] | null | undefined;
    teamEmails?: string[] | null | undefined;
} & DocumentSchema;
export declare class DealroomModel extends Model<Dealroom> {
}
/**
 * Add company to dealroom
 */
export type Includer = {
    company: string;
    dealroom: string;
    addedBy: string;
    stage: string;
    reason?: string | null;
    utm?: {
        source?: string | null;
    } | null;
    visibleToCompany: boolean;
} & DocumentSchema;
