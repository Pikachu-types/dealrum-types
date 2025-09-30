import { CustomerFocus, DocumentSchema, FundingRound, RaiseInstrument, reactSelectOptionsType, StartupCategory } from "../..";
import { Model } from "../model";

export type Company = {
  name: string;
  slug: string;
  logo?: string | null | undefined;
  currency: string;
  oneLiner: string; // Brief description, 10-140 characters
  website?: string | null;
  deck: string;
  founded: string | number | Date;
  incorporated: boolean;
  email: string;
  fundingRound: FundingRound;
  theWhy: string; // why do you think this founder is working on this product/service
  location: [string, string?]; // Primary location and optional secondary
  stage: string;
  category: StartupCategory;
  industries: reactSelectOptionsType[];
  technologies: reactSelectOptionsType[];
  customerFocus: CustomerFocus[];
  discoverable: boolean; // Is this pitchroom discoverable?
  deactivated: boolean | null | undefined; // Is this pitchroom deactivated?
  featured?: boolean | null;

  problem: string;
  solution: string;
  winningFormula: string; // Why would this win / What is it about the product that makes it a winning formula for their target market - do you think it is viable.
  market?: string | null;
  model?: string | null;
  strategy?: string | null;
  raising: boolean;
  raiseInstrument?: RaiseInstrument[];

  minRaise?: number | null; // Minimum 
  maxRaise?: number | null; // Maximum

  // team
  teamUids?: string[] | null | undefined;
  teamEmails?: string[] | null | undefined;
  owner: string;
  media?: {
    video?: string | null | undefined;
  },
  billing?: {
    email: string;
    currency: string;
  } | null;
} & DocumentSchema;


export class CompanyModel extends Model<Company> {
}