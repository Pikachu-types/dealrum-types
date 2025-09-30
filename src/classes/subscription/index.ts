import { DocumentSchema } from "../..";
import { Model } from "../model";

export type Subscription = {
  domain?: "test" | "live" | null;
  user: string; // Primary billing user (owner)
  customer?: string; // Stripe customer
  org: string; // Primary organisation only orgs can be on subscription
  provider: "stripe" | "paystack";
  status: "active" | "trialing" | "canceled" | "incomplete" | "past_due";
  subscriptionId?: string; // from stripe/paystack
  sessionId?: string; // from stripe/paystack
  priceId: string; // Optional Stripe price lookup
  productId: string; // Optional Stripe price lookup
  currency: string;
  startDate?: number;
  endDate?: number;
  planName: string;
  frequency: "monthly" | "yearly";
  cancelAtPeriodEnd?: boolean;
  attempts?: number; // Failed payment attempts
} & DocumentSchema;


export class SubscriptionModel extends Model<Subscription> {
}