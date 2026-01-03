import { DocumentSchema, TenantBranding, TenantBilling, TenantSettings, DashboardRoles, TenantUsecase } from "../../types";
import { Model } from "../model";
export type Tenant = {
    name: string;
    email: string;
    slug: string;
    description?: string;
    branding?: TenantBranding;
    settings: TenantSettings;
    billing?: TenantBilling;
    status: 'active' | 'trial' | 'suspended' | 'cancelled';
    owner: string;
    configuration?: {
        domain: string;
        verified: boolean;
    } | null;
    members: {
        [key: string]: {
            role: DashboardRoles;
            uid: string;
        };
    };
    usecase: TenantUsecase;
} & DocumentSchema;
export declare class TenantModel extends Model<Tenant> {
    /**
     * Check if tenant is in trial period
     * Note: Trial status is now managed by Stripe
     */
    isInTrial(): boolean;
    /**
     * Check if tenant is active (not suspended or cancelled)
     */
    isActive(): boolean;
    /**
     * Get tenant's display name
     */
    getDisplayName(): string;
    /**
     * Get tenant's branding configuration
     */
    getBranding(): TenantBranding | undefined;
    /**
     * Update tenant's branding
     */
    updateBranding(branding: Partial<TenantBranding>): void;
    /**
     * Get tenant's settings
     */
    getSettings(): TenantSettings;
    /**
     * Update tenant's settings
     */
    updateSettings(settings: Partial<TenantSettings>): void;
    /**
     * Get tenant's billing information
     */
    getBilling(): TenantBilling | undefined;
    /**
     * Update tenant's billing information
     */
    updateBilling(billing: Partial<TenantBilling>): void;
    /**
     * Check if tenant can add more members
     */
    canAddMember(): boolean;
    /**
     * Get tenant's plan limits
     */
    getLimits(): Tenant['settings']['limits'];
    /**
     * Get tenant's custom domains
     */
    getCustomDomains(): string[];
    /**
     * Check if tenant can add more custom domains
     */
    canAddCustomDomain(): boolean;
    userRole(uid: string): DashboardRoles | undefined;
}
