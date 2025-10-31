import { TenantPlan, TenantFeature } from '../types';
import { Tenant } from '../classes';

/**
 * Tenant utility functions for common operations
 */

/**
 * Get default limits for a specific plan
 */
export function getPlanLimits(plan: TenantPlan): Tenant['settings']['limits'] {
  const limits = {
    starter: {
      dealrooms: 1,
      members: 20,
      storage: 1000, // 1GB
      apiCalls: 1000,
      customDomains: 0,
    },
    professional: {
      dealrooms: 3,
      members: 50,
      storage: 5000, // 5GB
      apiCalls: 5000,
      customDomains: 1,
    },
    enterprise: {
      dealrooms: -1, // unlimited
      members: 200,
      storage: 20000, // 20GB
      apiCalls: 20000,
      customDomains: 3,
    },
    custom: {
      dealrooms: -1, // unlimited
      members: -1, // unlimited
      storage: 100000, // 100GB
      apiCalls: 100000,
      customDomains: -1, // unlimited
    },
  };

  return limits[plan];
}

/**
 * Get default features for a specific plan
 */
export function getPlanFeatures(plan: TenantPlan): TenantFeature[] {
  const features = {
    starter: [
      'customBranding' as TenantFeature,
    ],
    professional: [
      'customBranding' as TenantFeature,
      'customDomain' as TenantFeature,
      'prioritySupport' as TenantFeature,
    ],
    enterprise: [
      'customBranding' as TenantFeature,
      'customDomain' as TenantFeature,
      'apiAccess' as TenantFeature,
      'advancedAnalytics' as TenantFeature,
      'unlimitedDealrooms' as TenantFeature,
      'prioritySupport' as TenantFeature,
    ],
    custom: [
      'customBranding' as TenantFeature,
      'customDomain' as TenantFeature,
      'apiAccess' as TenantFeature,
      'advancedAnalytics' as TenantFeature,
      'unlimitedDealrooms' as TenantFeature,
      'dedicatedSupport' as TenantFeature,
      'customIntegrations' as TenantFeature,
      'mobileApp' as TenantFeature,
    ],
  };

  return features[plan];
}

/**
 * Get pricing for a specific plan
 */
export function getPlanPricing(plan: TenantPlan): { usd: number; ngn: number } {
  const pricing = {
    starter: { usd: 5000, ngn: 6000000 },
    professional: { usd: 10000, ngn: 12000000 },
    enterprise: { usd: 20000, ngn: 24000000 },
    custom: { usd: 30000, ngn: 36000000 },
  };

  return pricing[plan];
}

/**
 * Check if a plan supports a specific feature
 */
export function planSupportsFeature(plan: TenantPlan, feature: TenantFeature): boolean {
  const features = getPlanFeatures(plan);
  return features.includes(feature);
}

/**
 * Get the next tier plan
 */
export function getNextTierPlan(currentPlan: TenantPlan): TenantPlan | null {
  const tiers: TenantPlan[] = ['starter', 'professional', 'enterprise', 'custom'];
  const currentIndex = tiers.indexOf(currentPlan);
  
  if (currentIndex === -1 || currentIndex === tiers.length - 1) {
    return null;
  }
  
  return tiers[currentIndex + 1];
}

/**
 * Get the previous tier plan
 */
export function getPreviousTierPlan(currentPlan: TenantPlan): TenantPlan | null {
  const tiers: TenantPlan[] = ['starter', 'professional', 'enterprise', 'custom'];
  const currentIndex = tiers.indexOf(currentPlan);
  
  if (currentIndex <= 0) {
    return null;
  }
  
  return tiers[currentIndex - 1];
}

/**
 * Generate a tenant slug from name
 */
export function generateTenantSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Validate tenant domain format
 */
export function isValidDomain(domain: string): boolean {
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.([a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,})$/;
  return domainRegex.test(domain);
}

/**
 * Generate tenant subdomain
 */
export function generateTenantSubdomain(slug: string): string {
  return `${slug}.dealrum.com`;
}

/**
 * Check if domain is a Dealrum subdomain
 */
export function isDealrumSubdomain(domain: string): boolean {
  return domain.endsWith('.dealrum.com');
}

/**
 * Extract tenant slug from Dealrum subdomain
 */
export function extractTenantSlugFromSubdomain(domain: string): string | null {
  if (!isDealrumSubdomain(domain)) {
    return null;
  }
  
  return domain.replace('.dealrum.com', '');
}

/**
 * Get tenant status display text
 */
export function getTenantStatusDisplay(status: Tenant['status']): string {
  const statusMap: Record<Tenant['status'], string> = {
    active: 'Active',
    trial: 'Trial',
    suspended: 'Suspended',
    cancelled: 'Cancelled',
  };
  
  return statusMap[status] || 'Unknown';
}

/**
 * Check if tenant is in good standing
 */
export function isTenantInGoodStanding(tenant: Tenant): boolean {
  return tenant.status === 'active' || tenant.status === 'trial';
}

/**
 * Calculate days until trial expires
 * Note: Trial expiration is now managed by Stripe
 * This function is deprecated and should not be used
 */
export function getDaysUntilTrialExpires(tenant: Tenant): number | null {
  // Trial expiration is now handled by Stripe
  // Return null to indicate this should not be used
  return null;
}
