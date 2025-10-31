"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlanLimits = getPlanLimits;
exports.getPlanFeatures = getPlanFeatures;
exports.getPlanPricing = getPlanPricing;
exports.planSupportsFeature = planSupportsFeature;
exports.getNextTierPlan = getNextTierPlan;
exports.getPreviousTierPlan = getPreviousTierPlan;
exports.generateTenantSlug = generateTenantSlug;
exports.isValidDomain = isValidDomain;
exports.generateTenantSubdomain = generateTenantSubdomain;
exports.isDealrumSubdomain = isDealrumSubdomain;
exports.extractTenantSlugFromSubdomain = extractTenantSlugFromSubdomain;
exports.getTenantStatusDisplay = getTenantStatusDisplay;
exports.isTenantInGoodStanding = isTenantInGoodStanding;
exports.getDaysUntilTrialExpires = getDaysUntilTrialExpires;
/**
 * Tenant utility functions for common operations
 */
/**
 * Get default limits for a specific plan
 */
function getPlanLimits(plan) {
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
function getPlanFeatures(plan) {
    const features = {
        starter: [
            'customBranding',
        ],
        professional: [
            'customBranding',
            'customDomain',
            'prioritySupport',
        ],
        enterprise: [
            'customBranding',
            'customDomain',
            'apiAccess',
            'advancedAnalytics',
            'unlimitedDealrooms',
            'prioritySupport',
        ],
        custom: [
            'customBranding',
            'customDomain',
            'apiAccess',
            'advancedAnalytics',
            'unlimitedDealrooms',
            'dedicatedSupport',
            'customIntegrations',
            'mobileApp',
        ],
    };
    return features[plan];
}
/**
 * Get pricing for a specific plan
 */
function getPlanPricing(plan) {
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
function planSupportsFeature(plan, feature) {
    const features = getPlanFeatures(plan);
    return features.includes(feature);
}
/**
 * Get the next tier plan
 */
function getNextTierPlan(currentPlan) {
    const tiers = ['starter', 'professional', 'enterprise', 'custom'];
    const currentIndex = tiers.indexOf(currentPlan);
    if (currentIndex === -1 || currentIndex === tiers.length - 1) {
        return null;
    }
    return tiers[currentIndex + 1];
}
/**
 * Get the previous tier plan
 */
function getPreviousTierPlan(currentPlan) {
    const tiers = ['starter', 'professional', 'enterprise', 'custom'];
    const currentIndex = tiers.indexOf(currentPlan);
    if (currentIndex <= 0) {
        return null;
    }
    return tiers[currentIndex - 1];
}
/**
 * Generate a tenant slug from name
 */
function generateTenantSlug(name) {
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
function isValidDomain(domain) {
    const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.([a-zA-Z]{2,}|[a-zA-Z]{2,}\.[a-zA-Z]{2,})$/;
    return domainRegex.test(domain);
}
/**
 * Generate tenant subdomain
 */
function generateTenantSubdomain(slug) {
    return `${slug}.dealrum.com`;
}
/**
 * Check if domain is a Dealrum subdomain
 */
function isDealrumSubdomain(domain) {
    return domain.endsWith('.dealrum.com');
}
/**
 * Extract tenant slug from Dealrum subdomain
 */
function extractTenantSlugFromSubdomain(domain) {
    if (!isDealrumSubdomain(domain)) {
        return null;
    }
    return domain.replace('.dealrum.com', '');
}
/**
 * Get tenant status display text
 */
function getTenantStatusDisplay(status) {
    const statusMap = {
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
function isTenantInGoodStanding(tenant) {
    return tenant.status === 'active' || tenant.status === 'trial';
}
/**
 * Calculate days until trial expires
 * Note: Trial expiration is now managed by Stripe
 * This function is deprecated and should not be used
 */
function getDaysUntilTrialExpires(tenant) {
    // Trial expiration is now handled by Stripe
    // Return null to indicate this should not be used
    return null;
}
//# sourceMappingURL=tenant.js.map