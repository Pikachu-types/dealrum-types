import { DocumentSchema } from "../../../types";
import { Model } from "../../model";
export type Contributions = {
    id: string;
    pool: string;
    amount: number;
    currency: string;
    txID?: string;
    person: {
        first: string;
        last: string;
        email: string;
    };
    status: 'pending' | 'paid' | 'refunded' | 'failed';
} & DocumentSchema;
type ContributionTotal = {
    total: number;
    currency: string;
    count: number;
};
export declare class ContributionsModel extends Model<Contributions> {
    /**
     * Calculate total contributions from a list
     * @param contributions - Array of contributions
     * @param currency - Optional currency filter
     * @param statusFilter - Optional status filter (defaults to ['pledged', 'paid'])
     * @returns Object with total amount, currency, and count
     */
    static calculateContributions: (contributions: Contributions[], currency?: string, statusFilter?: Contributions["status"][]) => ContributionTotal;
}
export {};
