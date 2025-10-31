import { DealroomType, DocumentSchema, reactSelectOptionsType } from "../..";
import { Model } from "../model";

export type Dealroom = {
  slug: string;
  // General Information
  owner: string // Owner of the dealroom
  logo?: string | null | undefined;
  name: string; // Name of the dealroom
  oneLiner: string; // Brief description, 10-140 characters
  classification: DealroomType; // Classification details
  currency: string; // Preferred currency
  location: [string, string?]; // Primary location and optional secondary
  discoverable: boolean; // Is this dealroom discoverable?
  billing?: {
    email: string;
    currency: string;
  } | null;

  // NEW: Multi-tenancy field
  tenant_id?: string | null; // Tenant this dealroom belongs to

  deactivated: boolean | null | undefined; // Is this room deactivated?


  // Investment Details
  investmentCount: string; // Number of investments
  minInvestment: number; // Minimum investment amount
  maxInvestment: number; // Maximum investment amount
  roundMin: number; // Minimum round size
  roundMax: number; // Maximum round size
  leadBefore: string; // History of leading investments

  // Financial Metrics
  minMrr: number; // Minimum Monthly Recurring Revenue
  maxMrr: number; // Maximum Monthly Recurring Revenue

  // Preferences
  syndicates: string; // Syndicate details
  stages: string[]; // Stages of investments (at least one)
  categories: string[]; // Categories of interest (at least one)
  businessType: string[]; // Types of businesses interested in (at least one)
  industries: reactSelectOptionsType[]; // Industries (at least one)
  technologies: reactSelectOptionsType[]; // Technologies of interest (at least one)
  industryInterests: reactSelectOptionsType[]; // Industry interests (at least one)
  countryInterests: reactSelectOptionsType[]; // Country interests (at least one)
  expertise: reactSelectOptionsType[]; // CV (at least one)

  // Philosophical Alignment
  ethos: string; // Description of ethos, 10-300 characters
  yourWhy: string; // Description of purpose, 10-300 characters

  //team
  teamUids?: string[] | null | undefined;
  teamEmails?: string[] | null | undefined;
} & DocumentSchema;

export class DealroomModel extends Model<Dealroom> {
  
  /**
   * Check if dealroom belongs to a specific tenant
   */
  public belongsToTenant(tenantId: string): boolean {
    return this.data.tenant_id === tenantId;
  }
  
  /**
   * Assign dealroom to a tenant
   */
  public assignToTenant(tenantId: string): void {
    this.data.tenant_id = tenantId;
  }
  
  /**
   * Remove dealroom from tenant
   */
  public removeFromTenant(): void {
    this.data.tenant_id = null;
  }
  
  /**
   * Get dealroom's tenant ID
   */
  public getTenantId(): string | null {
    return this.data.tenant_id || null;
  }
  
  /**
   * Check if dealroom is discoverable within tenant context
   */
  public isDiscoverableInTenant(): boolean {
    return this.data.discoverable && this.data.tenant_id !== null;
  }
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
    source?: string | null
  } | null;
  visibleToCompany: boolean;
  // NEW: Multi-tenancy field
  tenant_id?: string | null; // Tenant this includer belongs to
} & DocumentSchema;