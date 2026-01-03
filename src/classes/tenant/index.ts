import { DocumentSchema, TenantBranding, TenantBilling, TenantSettings, DashboardRoles, TenantUsecase } from "../../types";
import { Model } from "../model";

export type Tenant = {
  // [key: string]: unknown;
  
  // Basic Information
  name: string;
  email: string; // billing and contact email
  slug: string; // URL-friendly identifier
  description?: string;

  // Branding & Customization
  branding?: TenantBranding;
  
  // Settings & Configuration
  settings: TenantSettings;
  
  // Billing Information
  billing?: TenantBilling;
  
  // Status & Metadata
  status: 'active' | 'trial' | 'suspended' | 'cancelled';
  
  // Owner Information
  owner: string; // User ID of the tenant owner
  
  configuration?: {
    domain: string;
    verified: boolean;
  } | null,

  members: {
    [key: string]: {
      role: DashboardRoles;
      uid: string;
    },
  };

  usecase: TenantUsecase
  
} & DocumentSchema;

export class TenantModel extends Model<Tenant> {
  
  
  /**
   * Check if tenant is in trial period
   * Note: Trial status is now managed by Stripe
   */
  public isInTrial(): boolean {
    return this.data.status === 'trial';
  }
  
  /**
   * Check if tenant is active (not suspended or cancelled)
   */
  public isActive(): boolean {
    return this.data.status === 'active' || this.isInTrial();
  }
  
  /**
   * Get tenant's display name
   */
  public getDisplayName(): string {
    return this.data.name;
  }
  
  /**
   * Get tenant's branding configuration
   */
  public getBranding(): TenantBranding | undefined {
    return this.data.branding;
  }
  
  /**
   * Update tenant's branding
   */
  public updateBranding(branding: Partial<TenantBranding>): void {
    this.data.branding = { ...this.data.branding, ...branding } as TenantBranding;
    this.data.updatedAt = Date.now();
  }
  
  /**
   * Get tenant's settings
   */
  public getSettings(): TenantSettings {
    return this.data.settings;
  }
  
  /**
   * Update tenant's settings
   */
  public updateSettings(settings: Partial<TenantSettings>): void {
    this.data.settings = { ...this.data.settings, ...settings };
    this.data.updatedAt = Date.now();
  }
  
  /**
   * Get tenant's billing information
   */
  public getBilling(): TenantBilling | undefined {
    return this.data.billing;
  }
  
  /**
   * Update tenant's billing information
   */
  public updateBilling(billing: Partial<TenantBilling>): void {
    this.data.billing = { ...this.data.billing, ...billing } as TenantBilling;
    this.data.updatedAt = Date.now();
  }
  
  /**
   * Check if tenant can add more members
   */
  public canAddMember(): boolean {
    const memberCount = Object.entries(this.data.members).length;
    return memberCount < this.data.settings.limits.members;
  }
  
  /**
   * Get tenant's plan limits
   */
  public getLimits(): Tenant['settings']['limits'] {
    return this.data.settings.limits;
  }
  
  /**
   * Get tenant's custom domains
   */
  public getCustomDomains(): string[] {
    return this.data.configuration?.domain ? [this.data.configuration.domain]:[];
    // return this.data.domains.filter(domain => !domain.includes('.dealrum.com'));
  }
  
  /**
   * Check if tenant can add more custom domains
   */
  public canAddCustomDomain(): boolean {
    const customDomains = this.getCustomDomains();
    return customDomains.length < this.data.settings.limits.customDomains;
  }
 
  public userRole(uid: string): DashboardRoles | undefined {
    return this.schema.members[uid].role;
  }
}
