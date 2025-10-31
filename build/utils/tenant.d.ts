import { TenantPlan, TenantFeature } from '../types';
import { Tenant } from '../classes';
/**
 * Tenant utility functions for common operations
 */
/**
 * Get default limits for a specific plan
 */
export declare function getPlanLimits(plan: TenantPlan): Tenant['settings']['limits'];
/**
 * Get default features for a specific plan
 */
export declare function getPlanFeatures(plan: TenantPlan): TenantFeature[];
/**
 * Get pricing for a specific plan
 */
export declare function getPlanPricing(plan: TenantPlan): {
    usd: number;
    ngn: number;
};
/**
 * Check if a plan supports a specific feature
 */
export declare function planSupportsFeature(plan: TenantPlan, feature: TenantFeature): boolean;
/**
 * Get the next tier plan
 */
export declare function getNextTierPlan(currentPlan: TenantPlan): TenantPlan | null;
/**
 * Get the previous tier plan
 */
export declare function getPreviousTierPlan(currentPlan: TenantPlan): TenantPlan | null;
/**
 * Generate a tenant slug from name
 */
export declare function generateTenantSlug(name: string): string;
/**
 * Validate tenant domain format
 */
export declare function isValidDomain(domain: string): boolean;
/**
 * Generate tenant subdomain
 */
export declare function generateTenantSubdomain(slug: string): string;
/**
 * Check if domain is a Dealrum subdomain
 */
export declare function isDealrumSubdomain(domain: string): boolean;
/**
 * Extract tenant slug from Dealrum subdomain
 */
export declare function extractTenantSlugFromSubdomain(domain: string): string | null;
/**
 * Get tenant status display text
 */
export declare function getTenantStatusDisplay(status: Tenant['status']): string;
/**
 * Check if tenant is in good standing
 */
export declare function isTenantInGoodStanding(tenant: Tenant): boolean;
/**
 * Calculate days until trial expires
 * Note: Trial expiration is now managed by Stripe
 * This function is deprecated and should not be used
 */
export declare function getDaysUntilTrialExpires(tenant: Tenant): number | null;
