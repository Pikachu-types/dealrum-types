import { EnvironmentType, PricingPlanType } from "../enums";

export const BUSINESS_INDUSTRIES: { value: string; label: string }[] = [
  { value: "restaurant", label: "Restaurant" },
  { value: "bar", label: "Bar" },
  { value: "cafe", label: "Café" },
  { value: "lounge", label: "Lounge" },
  { value: "hotel_kitchen", label: "Hotel Kitchen" },
  { value: "food_truck", label: "Food Truck" },
  { value: "bakery", label: "Bakery" },
  { value: "club", label: "Club" },
  { value: "catering_service", label: "Catering Service" },
  { value: "event_venue", label: "Event Venue" },
  { value: "fast_food", label: "Fast Food Outlet" },
  { value: "private_chef", label: "Private Chef Business" },
  { value: "kitchen_service", label: "Kitchen-as-a-Service" },
  { value: "franchise", label: "Franchise Food Brand" },
  { value: "juice_bar", label: "Juice or Smoothie Bar" },
  { value: "qsr", label: "QSR (Quick Service Restaurant)" },
  { value: "deli", label: "Deli" },
  { value: "hookah_lounge", label: "Hookah Lounge" },
  { value: "popup", label: "Pop-up Eatery" },
  { value: "salon", label: "Salon" },
  { value: "gym", label: "Gym" },
  { value: "spa", label: "Spa" }
];

export interface Authorization {
  customer: {
    test?: string;
    live?: string;
  };
  map: {
    card_type: string;
    channel: string;
    brand: string;
    country_code: string;
    exp_month: string
    exp_year: string;
    last4: string;
    reusable: boolean
  },
  keep: string; // authorization code which we will encrypt
}

export type  DocumentSchema = {
  id: string; // Unique identifier
  // Metadata
  iat: Date | null | string | number;
  updatedAt?: Date | null | string | number; // Timestamp for last update
}

export type reactSelectOptionsType = {
  label: string;
  group: string;
  value: string;
}

// Tenant-related types
export interface TenantBranding {
  logo?: string | null;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  favicon?: string;
}

export interface TenantLimits {
  members: number;
  customDomains: number;
}

export interface TenantBilling {
  plan: PricingPlanType;
  customerId?: string; // Stripe customer ID
  subscriptionId?: string; // Stripe subscription ID
  priceId?: string; // Stripe price ID
  domain?: EnvironmentType;
}

export interface TenantSettings {
  features: string[];
  limits: TenantLimits;
  customDomain?: string;
  sslEnabled?: boolean;
  custom404?: string;
  customLanding?: string;
  emailTemplates?: {
    welcome?: string;
    invitation?: string;
    notification?: string;
  };
}

export interface TenantDomain extends DocumentSchema {
  tenantId: string;
  domain: string;
  sslEnabled: boolean;
  custom404?: string;
  customLanding?: string;
  verified: boolean;
  verificationToken?: string;
}

export type OptionSchema = {
  label: string;
  options: {
    label: string;
    group: string;
    value: string;
  }[];
};