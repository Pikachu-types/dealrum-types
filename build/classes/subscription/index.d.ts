import { DocumentSchema } from "../..";
import { Model } from "../model";
export type Subscription = {
    domain?: "test" | "live" | null;
    user: string;
    customer?: string;
    org: string;
    provider: "stripe" | "paystack";
    status: "active" | "trialing" | "canceled" | "incomplete" | "past_due";
    subscriptionId?: string;
    sessionId?: string;
    priceId: string;
    productId: string;
    currency: string;
    startDate?: number;
    endDate?: number;
    planName: string;
    frequency: "monthly" | "yearly";
    cancelAtPeriodEnd?: boolean;
    attempts?: number;
} & DocumentSchema;
export declare class SubscriptionModel extends Model<Subscription> {
}
