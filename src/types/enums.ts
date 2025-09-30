export const collections = {
  dealroom: "dealroom",
  includer: "includer",
  users: "users",
  payments: "payments",
  questions: "questions",
  teams: "teams",
  companies: "companies",
  subscriptions: "subscriptions",
  team: "team",
  views: "views",
  pitchDecks: "decks",
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
  pasbyMail: "pasby and email authentication"
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
