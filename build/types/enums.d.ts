export declare const collections: {
    readonly dealroom: "dealroom";
    readonly includer: "includer";
    readonly users: "users";
    readonly payments: "payments";
    readonly questions: "questions";
    readonly teams: "teams";
    readonly companies: "companies";
    readonly subscriptions: "subscriptions";
    readonly team: "team";
    readonly views: "views";
    readonly pitchDecks: "decks";
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
export {};
