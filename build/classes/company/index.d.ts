import { CustomerFocus, DocumentSchema, FundingRound, RaiseInstrument, reactSelectOptionsType, StartupCategory } from "../..";
import { Model } from "../model";
export type Company = {
    name: string;
    slug: string;
    logo?: string | null | undefined;
    currency: string;
    oneLiner: string;
    website?: string | null;
    deck: string;
    founded: string | number | Date;
    incorporated: boolean;
    email: string;
    fundingRound: FundingRound;
    theWhy: string;
    location: [string, string?];
    stage: string;
    category: StartupCategory;
    industries: reactSelectOptionsType[];
    technologies: reactSelectOptionsType[];
    customerFocus: CustomerFocus[];
    discoverable: boolean;
    deactivated: boolean | null | undefined;
    featured?: boolean | null;
    problem: string;
    solution: string;
    winningFormula: string;
    market?: string | null;
    model?: string | null;
    strategy?: string | null;
    raising: boolean;
    raiseInstrument?: RaiseInstrument[];
    minRaise?: number | null;
    maxRaise?: number | null;
    teamUids?: string[] | null | undefined;
    teamEmails?: string[] | null | undefined;
    owner: string;
    media?: {
        video?: string | null | undefined;
    };
    billing?: {
        email: string;
        currency: string;
    } | null;
} & DocumentSchema;
export declare class CompanyModel extends Model<Company> {
}
