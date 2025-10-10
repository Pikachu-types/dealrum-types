import { DocumentSchema, EnvironmentType } from "../../../types";
import { Company } from "../../company";
import { Dealroom } from "../../dealroom";
import { Model } from "../../model";
import { Contributions } from "./contributions";

export type InvestmentPool = {
  dealroom: string;
  company: string;
  deadline: number;
  status: 'open' | 'closed' | 'completed';
  createdBy: string; // member id
  description?: string;
  minContribution: number;
  target: number;
  title: string;
  domain: EnvironmentType;
  currency: string;
} & DocumentSchema;

export type PoolContributions = {
  pool: InvestmentPool;
  contributions: Contributions[];
  company?: Company;
  room?: Dealroom;
};

export class InvestmentPoolModel extends Model<InvestmentPool> {
}