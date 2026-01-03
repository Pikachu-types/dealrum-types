export declare const collections: {
    readonly dealroom: "dealroom";
    readonly includer: "includer";
    readonly users: "users";
    readonly payments: "payments";
    readonly organizations: "organizations";
    readonly questions: "questions";
    readonly orgRequests: "orgRequests";
    readonly teams: "teams";
    readonly companies: "companies";
    readonly subscriptions: "subscriptions";
    readonly team: "team";
    readonly deals: "deals";
    readonly pools: "pools";
    readonly views: "views";
    readonly pitchDecks: "decks";
    readonly investorForms: "investorForms";
    readonly formResponses: "formResponses";
    readonly funneling: (tenant: string) => string;
    readonly funnelSubmissions: (tenant: string) => string;
    readonly contributionCol: (pool: string) => string;
    readonly tenants: "tenants";
    readonly tenantDomains: "tenantDomains";
    readonly tenantSettings: "tenantSettings";
};
export declare const startupCategory: {
    readonly software: "software";
    readonly hardware: "hardware";
    readonly other: "other";
};
export declare const socialLinks: {
    readonly linkedin: "LinkedIn";
    readonly facebook: "Facebook";
    readonly website: "Website";
    readonly x: "X";
    readonly other: "Other";
};
export declare const authProvider: {
    readonly email: "Email address";
    readonly pasby: "pasby e-ID (National Identification Number)";
    readonly pasbyMail: "pasby and email authentication";
    readonly custom: "Wildcard verifiable authenticator";
};
export declare const companyStages: {
    readonly idea: "Idea stage";
    readonly mvp: "MVP/Seed stage";
    readonly product: "Product-market fit";
    readonly scale: "Scaling stage";
};
export declare const dealroomType: {
    readonly angel: "angel";
    readonly vc: "VC or Fund";
};
export declare const customerFocus: {
    readonly b2b: "B2B";
    readonly b2c: "B2C";
    readonly b2g: "B2G";
    readonly b2b2c: "B2B2C";
    readonly b2b2b: "B2B2B";
    readonly c2c: "C2C";
    readonly b2b2c2g: "B2B2C2G";
};
export declare const raiseInstrument: {
    readonly equity: "Equity";
    readonly safe: "SAFE";
    readonly convertible: "Convertible note";
    readonly loan: "Loan";
    readonly other: "Other";
    readonly undecided: "Undecided";
    readonly none: "Not interested in funding";
};
export declare const fundingRounds: {
    readonly preSeed: "Pre-seed round";
    readonly seed: "Seed round";
    readonly seriesA: "Series A";
    readonly seriesB: "Series B";
    readonly seriesC: "Series C";
    readonly seriesD: "Series D";
    readonly seriesE: "Series E";
    readonly seriesF: "Series F";
    readonly ipo: "Initial Public Offering (IPO)";
    readonly mezzanine: "Mezzanine financing";
    readonly bridge: "Bridge round";
    readonly angel: "Angel round";
    readonly familyFriends: "Friends & Family round";
    readonly venture: "Venture round";
    readonly corporate: "Corporate round";
    readonly privateEquity: "Private Equity round";
    readonly debtFinancing: "Debt Financing";
    readonly grant: "Grant";
    readonly crowdfunding: "Crowdfunding";
};
export declare const accessPermissions: {
    readonly member: "member";
    readonly admin: "admin";
    readonly none: "none";
};
declare const memberStatus: {
    readonly joined: "joined";
    readonly pending: "pending";
};
export declare const tenantStatus: {
    readonly active: "active";
    readonly trial: "trial";
    readonly suspended: "suspended";
    readonly cancelled: "cancelled";
};
export declare const tenantPlan: {
    readonly starter: "starter";
    readonly professional: "professional";
    readonly enterprise: "enterprise";
    readonly custom: "custom";
};
export declare const tenantBillingStatus: {
    readonly active: "active";
    readonly trialing: "trialing";
    readonly past_due: "past_due";
    readonly cancelled: "cancelled";
    readonly incomplete: "incomplete";
};
export declare const tenantFeature: {
    readonly customDomain: "custom_domain";
    readonly sso: "sso";
    readonly apiAccess: "api_access";
    readonly advancedAnalytics: "advanced_analytics";
    readonly customBranding: "custom_branding";
    readonly unlimitedDealrooms: "unlimited_dealrooms";
    readonly prioritySupport: "priority_support";
    readonly dedicatedSupport: "dedicated_support";
    readonly customIntegrations: "custom_integrations";
    readonly mobileApp: "mobile_app";
};
export declare const range: {
    day: string;
    week: string;
    month: string;
};
export declare const timeRanges: TimeRange[];
declare const roles: {
    readonly investor: "investor";
    readonly founder: "founder";
    readonly both: "both";
};
export declare const fieldTypes: {
    number: "number";
    boolean: "boolean";
    text: "text";
    textarea: "textarea";
    select: "select";
    multiselect: "multiselect";
    email: "email";
    date: "date";
    file: "file";
    url: "url";
    location: "location";
};
export declare const environmentType: {
    live: "live";
    test: "test";
};
export declare const pricingPlans: {
    starter: "starter";
    professional: "professional";
};
export declare const dRoles: {
    admin: "admin";
    analyst: "analyst";
    partner: "partner";
};
export declare const tenantUseCase: {
    investor: "investor";
    syndicate: "syndicate";
    event: "event";
};
export declare const funnelStage: {
    inbox: "inbox";
    longlist: "longlist";
    shortlist: "shortlist";
    closed: "closed";
    rejected: "rejected";
};
export type FormFieldType = keyof typeof fieldTypes;
export type FunnelStages = keyof typeof funnelStage;
export type PricingPlanType = keyof typeof pricingPlans;
export type TenantUsecase = keyof typeof tenantUseCase;
export type DashboardRoles = keyof typeof dRoles;
export type UserRole = keyof typeof roles;
export type DealroomType = keyof typeof dealroomType;
export type TimeRange = keyof typeof range;
export type AccessPermission = keyof typeof accessPermissions;
export type MemberStatus = keyof typeof memberStatus;
export type SocialLinkTypes = keyof typeof socialLinks;
export type AuthenticationProvider = keyof typeof authProvider;
export type FundingRound = keyof typeof fundingRounds;
export type StartupCategory = keyof typeof startupCategory;
export type CompanyStage = keyof typeof companyStages;
export type CustomerFocus = keyof typeof customerFocus;
export type RaiseInstrument = keyof typeof raiseInstrument;
export type EnvironmentType = keyof typeof environmentType;
export type TenantStatus = keyof typeof tenantStatus;
export type TenantPlan = keyof typeof tenantPlan;
export type TenantBillingStatus = keyof typeof tenantBillingStatus;
export type TenantFeature = keyof typeof tenantFeature;
export {};
