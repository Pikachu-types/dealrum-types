"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeRanges = exports.range = exports.accessPermissions = exports.fundingRounds = exports.raiseInstrument = exports.customerFocus = exports.dealroomType = exports.companyStages = exports.authProvider = exports.socialLinks = exports.startupCategory = exports.collections = void 0;
exports.collections = {
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
};
exports.startupCategory = {
    software: "software",
    hardware: "hardware",
    other: "other",
};
exports.socialLinks = {
    linkedin: "LinkedIn",
    facebook: "Facebook",
    website: "Website",
    x: "X",
    other: "Other",
};
exports.authProvider = {
    email: "Email address",
    pasby: "pasby e-ID (National Identification Number)",
    pasbyMail: "pasby and email authentication"
};
exports.companyStages = {
    idea: "Idea stage",
    mvp: "MVP/Seed stage",
    product: "Product-market fit",
    scale: "Scaling stage"
};
exports.dealroomType = {
    angel: "angel",
    vc: "VC or Fund",
};
exports.customerFocus = {
    b2b: "B2B",
    b2c: "B2C",
    b2g: "B2G",
    b2b2c: "B2B2C",
    b2b2b: "B2B2B",
    c2c: "C2C",
    b2b2c2g: "B2B2C2G",
};
exports.raiseInstrument = {
    equity: "Equity",
    safe: "SAFE",
    convertible: "Convertible note",
    loan: "Loan",
    other: "Other",
    undecided: "Undecided",
    none: "Not interested in funding",
};
exports.fundingRounds = {
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
};
exports.accessPermissions = {
    member: "member",
    admin: "admin",
    none: "none",
};
const memberStatus = {
    joined: "joined",
    pending: "pending",
};
exports.range = {
    day: "day",
    week: "week",
    month: "month",
};
exports.timeRanges = Object.keys(exports.range);
const roles = {
    investor: "investor",
    founder: "founder",
    both: "both"
};
//# sourceMappingURL=enums.js.map