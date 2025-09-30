import { DocumentSchema } from "../..";

export type Checkout = {
  reference: string;
  provider: "flutterwave" | "korapay" | "stripe"
  domain?: "test" | "live" | null;
  user: string;
  fee?: number | null;
  transaction: {
    amount: number;
    id: string;
    currency: string;
    type: "gpt" | "slot" | "subscription"
  },
  promo?: string | null;
  paidAt?: number | Date | string | null;
  status: "paid" | "stale" | "failed";
} & DocumentSchema;

