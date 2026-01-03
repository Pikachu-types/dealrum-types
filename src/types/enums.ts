export const collections = {
  dealroom: "dealroom",
  includer: "includer",
  users: "users",
  payments: "payments",
  organizations: "organizations",
  questions: "questions",
  orgRequests: "orgRequests",
  teams: "teams",
  companies: "companies",
  subscriptions: "subscriptions",
  team: "team",
  deals: "deals",
  pools: "pools",
  views: "views",
  pitchDecks: "decks",
  investorForms: "investorForms",
  formResponses: "formResponses",
  funneling: (tenant:string) => `tenants/${tenant}/funneling`,
  funnelSubmissions: (tenant: string) => `tenants/${tenant}/funnel-submissions`,
  contributionCol: (pool: string) => `pools/${pool}/contributions`,
  tenants: "tenants",
  tenantDomains: "tenantDomains",
  tenantSettings: "tenantSettings",
} as const;

export const startupCategory = {
  software: "software",
  hardware: "hardware",
  other: "other",
} as const;
export const socialLinks = {
  linkedin: "LinkedIn",
  facebook: "Facebook",
  website: "Website",
  x: "X",
  other: "Other",
} as const;

export const authProvider = {
  email: "Email address",
  pasby: "pasby e-ID (National Identification Number)",
  pasbyMail: "pasby and email authentication",
  custom: "Wildcard verifiable authenticator",
} as const;

export const companyStages = {
  idea: "Idea stage",
  mvp: "MVP/Seed stage",
  product: "Product-market fit",
  scale: "Scaling stage"
} as const;

export const dealroomType = {
  angel: "angel",
  vc: "VC or Fund",
} as const;

export const customerFocus = {
  b2b: "B2B",
  b2c: "B2C",
  b2g: "B2G",
  b2b2c: "B2B2C",
  b2b2b: "B2B2B",
  c2c: "C2C",
  b2b2c2g: "B2B2C2G",
} as const;

export const raiseInstrument = {
  equity: "Equity",
  safe: "SAFE",
  convertible: "Convertible note",
  loan: "Loan",
  other: "Other",
  undecided: "Undecided",
  none: "Not interested in funding",
} as const;

export const fundingRounds = {
  preSeed: "Pre-seed round",
  seed: "Seed round",
  seriesA: "Series A",
  seriesB: "Series B",
  seriesC: "Series C",
  seriesD: "Series D",
  seriesE: "Series E",
  seriesF: "Series F",
  ipo: "Initial Public Offering (IPO)",
  mezzanine: "Mezzanine financing",
  bridge: "Bridge round",
  angel: "Angel round",
  familyFriends: "Friends & Family round",
  venture: "Venture round",
  corporate: "Corporate round",
  privateEquity: "Private Equity round",
  debtFinancing: "Debt Financing",
  grant: "Grant",
  crowdfunding: "Crowdfunding"
} as const;

export const accessPermissions = {
  member: "member",
  admin: "admin",
  none: "none",
} as const;

const memberStatus = {
  joined: "joined",
  pending: "pending",
} as const;

// Tenant-related enums
export const tenantStatus = {
  active: "active",
  trial: "trial",
  suspended: "suspended",
  cancelled: "cancelled",
} as const;

export const tenantPlan = {
  starter: "starter",
  professional: "professional", 
  enterprise: "enterprise",
  custom: "custom",
} as const;

export const tenantBillingStatus = {
  active: "active",
  trialing: "trialing",
  past_due: "past_due",
  cancelled: "cancelled",
  incomplete: "incomplete",
} as const;

export const tenantFeature = {
  customDomain: "custom_domain",
  sso: "sso",
  apiAccess: "api_access",
  advancedAnalytics: "advanced_analytics",
  customBranding: "custom_branding",
  unlimitedDealrooms: "unlimited_dealrooms",
  prioritySupport: "priority_support",
  dedicatedSupport: "dedicated_support",
  customIntegrations: "custom_integrations",
  mobileApp: "mobile_app",
} as const;

export const range = {
  day: "day",
  week: "week",
  month: "month",
}
export const timeRanges: TimeRange[] = Object.keys(range) as TimeRange[];

const roles = {
  investor: "investor",
  founder: "founder",
  both: "both"
} as const;

export const fieldTypes = strEnum(['text', 'textarea', 'select', 'multiselect', 'number', 'email', 'date', 'file', 'boolean', 'url', 'location']);

export const environmentType = strEnum(['live', 'test']);
export const pricingPlans = strEnum(['starter', 'professional']);
export const dRoles = strEnum(['admin', 'analyst', 'partner']);

export const tenantUseCase = strEnum(['syndicate', 'event', 'investor']);
export const funnelStage = strEnum(['inbox', 'longlist', 'shortlist', 'closed', 'rejected']);


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

// Tenant-related types
export type TenantStatus = keyof typeof tenantStatus;
export type TenantPlan = keyof typeof tenantPlan;
export type TenantBillingStatus = keyof typeof tenantBillingStatus;
export type TenantFeature = keyof typeof tenantFeature;



function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}