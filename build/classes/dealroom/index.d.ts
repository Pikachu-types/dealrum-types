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
    billing?: {
        email: string;
        currency: string;
    } | null;
    tenant_id?: string | null;
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
    /**
     * Check if dealroom belongs to a specific tenant
     */
    belongsToTenant(tenantId: string): boolean;
    /**
     * Assign dealroom to a tenant
     */
    assignToTenant(tenantId: string): void;
    /**
     * Remove dealroom from tenant
     */
    removeFromTenant(): void;
    /**
     * Get dealroom's tenant ID
     */
    getTenantId(): string | null;
    /**
     * Check if dealroom is discoverable within tenant context
     */
    isDiscoverableInTenant(): boolean;
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
    tenant_id?: string | null;
} & DocumentSchema;
