import { EnvironmentType, PricingPlanType } from "../enums";
export declare const BUSINESS_INDUSTRIES: {
    value: string;
    label: string;
}[];
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
        exp_month: string;
        exp_year: string;
        last4: string;
        reusable: boolean;
    };
    keep: string;
}
export type DocumentSchema = {
    id: string;
    iat: Date | null | string | number;
    updatedAt?: Date | null | string | number;
};
export type reactSelectOptionsType = {
    label: string;
    group: string;
    value: string;
};
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
    customerId?: string;
    subscriptionId?: string;
    priceId?: string;
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
