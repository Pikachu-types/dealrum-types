/** Firestore collection paths used by Dealrum (intake + pipeline MVP). */
export declare const collections: {
    readonly users: "users";
    readonly tenants: "tenants";
    /** One funnel definition per doc (name, description, sections). */
    readonly funnels: (tenantId: string) => string;
    readonly funnelSubmissions: (tenantId: string) => string;
};
type DocumentSchema = {
    id: string;
    iat: Date | null | string | number;
    updatedAt?: Date | null | string | number;
};
export type DashboardRoles = "admin" | "partner" | "analyst" | "viewer";
export type AuthProviderKind = "pasby" | "google" | "email" | "custom";
/** Lifetime workspace purchase tier (Stripe-gated before first owned workspace). */
export type WorkspaceLicenseTier = "core" | "scale" | "operator";
export type WorkspaceLicense = {
    tier: WorkspaceLicenseTier;
    /** Max workspaces this user may own (provision) under this license. */
    maxWorkspaces: number;
    purchasedAt: number;
    stripeCheckoutSessionId?: string;
    /** Stripe Customer (`cus_…`) for support, receipts linkage, and future upsells. */
    stripeCustomerId?: string;
    /**
     * Purchased add-on capacity: each unit adds +1 to max **active** funnels (see
     * `maxActiveFunnelsForLicense`). Stripe slot packs increment this field.
     */
    additionalFunnelSlots?: number;
};
export type User = DocumentSchema & {
    email: string;
    naming: {
        first: string;
        last: string;
        middle?: string;
    };
    photoUrl?: string | null | undefined;
    eid?: string;
    phone?: string | null | undefined;
    security: {
        emailVerified: boolean;
        phoneVerified: boolean;
        authProvider: AuthProviderKind[];
    };
    /** Set after successful Stripe Checkout for workspace purchase; not required for invited members. */
    workspaceLicense?: WorkspaceLicense;
};
export declare class UserModel {
    schema: User;
    constructor(schema: User);
    static fromJson(data: User): UserModel;
    get fullname(): string;
}
export type TenantMember = {
    uid: string;
    email?: string;
    role?: DashboardRoles | string;
    addedAt?: number;
};
export interface Tenant {
    id: string;
    iat: number;
    updatedAt?: number;
    name: string;
    slug: string;
    email?: string;
    owner?: string;
    members: Record<string, TenantMember>;
    branding?: {
        logo?: string | null;
        favicon?: string | null;
    };
    status?: "active" | "suspended" | "cancelled" | string;
    /** Hostnames used to resolve this tenant (custom domains). */
    domains?: string[];
    configuration?: {
        domain?: string;
        verified?: boolean;
    };
    /** Public-facing blurb (e.g. workspace “about” from onboarding). */
    description?: string;
    settings?: {
        features?: string[];
        limits?: {
            members?: number;
            customDomains?: number;
        };
    };
}
export declare class TenantModel {
    private tenant;
    constructor(tenant: Tenant);
    static fromJson(t: Tenant): TenantModel;
    /** Public origin for this tenant (apply link host). */
    domain(host: string): string;
    userRole(uid: string): DashboardRoles | "viewer" | undefined;
}
export type FunnelFieldType = "text" | "textarea" | "url" | "email" | "number" | "select" | "multiselect" | "file" | "switch" | "radio" | "date" | string;
export declare const fieldTypes: {
    readonly text: "text";
    readonly textarea: "textarea";
    readonly url: "url";
    readonly email: "email";
    readonly number: "number";
    readonly select: "select";
    readonly multiselect: "multiselect";
    readonly file: "file";
    readonly switch: "switch";
    readonly radio: "radio";
    readonly date: "date";
};
export type FunnelField = {
    name: string;
    label: string;
    type: FunnelFieldType;
    required?: boolean;
    placeholder?: string;
    description?: string;
    default?: boolean;
    value?: string;
    order?: number;
    iat?: number;
    file?: {
        type?: string;
    };
    options?: {
        label: string;
        value: string;
    }[];
    /** e.g. `internal` for static option lists in the apply UI */
    source?: string;
};
export type FunnelSection = {
    default?: boolean;
    position?: number;
    fields: FunnelField[];
};
/** Intake form lifecycle: only `active` funnels count toward the owner’s license quota. */
export type FunnelLifecycleStatus = "active" | "archived";
export interface FunnelConfig {
    id: string;
    iat: number;
    updatedAt?: number;
    updatedBy?: string;
    /** Defaults to `active` when missing (legacy documents). */
    status?: FunnelLifecycleStatus;
    /** Human-readable title in the dashboard. */
    name?: string;
    /** Shown to workspace admins; optional. */
    description?: string;
    /**
     * Optional key-value pairs for internal use (e.g. program codes, CRM ids).
     * Not shown on the public apply form.
     */
    metadata?: Record<string, string>;
    /** When true, this funnel powers `/apply` when no `funnelId` query is provided. */
    isPrimary?: boolean;
    /**
     * Public hostname for this funnel only (e.g. `apply.partner.com`).
     * Lowercase; registered on Vercel via API; DNS must CNAME to `cname.vercel-dns.com`.
     */
    customDomain?: string;
    /** Set when Vercel reports the project domain is verified; required for public routing on this host. */
    domainVerified?: boolean;
    sections: Record<string, FunnelSection>;
}
export type FunnelSubmissionStatus = "draft" | "submitted" | "reviewing" | "accepted" | "rejected" | "withdrawn";
export type FunnelStages = "inbox" | "longlist" | "shortlist" | "closed" | "rejected";
export interface FunnelSubmission {
    id: string;
    iat: number;
    tenantId: string;
    funnelConfigId: string;
    submittedDataSnapshot: Record<string, unknown>;
    status: FunnelSubmissionStatus;
    submittedBy?: {
        uid?: string;
        name?: string;
        isAuthenticated: boolean;
    };
    stage: FunnelStages | string;
    files?: Array<{
        fieldName: string;
        url: string;
        type: string;
        uploadedAt: number;
    }>;
    reviewedAt?: number;
    notes?: string;
    tags?: string[];
    /** @deprecated use `notes` */
    reviewNotes?: string;
    /** @deprecated use `notes` */
    internalNotes?: string;
}
export type Company = {
    id?: string;
    name?: string;
    logo?: string | null;
};
export type OptionSchema = {
    label: string;
    options: {
        label: string;
        group: string;
        value: string;
    }[];
};
export declare const fundingRounds: readonly [{
    readonly label: "Pre-seed";
    readonly value: "pre_seed";
}, {
    readonly label: "Seed";
    readonly value: "seed";
}, {
    readonly label: "Series A";
    readonly value: "series_a";
}, {
    readonly label: "Series B+";
    readonly value: "series_b_plus";
}];
export declare const raiseInstrument: readonly [{
    readonly label: "Equity";
    readonly value: "equity";
}, {
    readonly label: "SAFE";
    readonly value: "safe";
}, {
    readonly label: "Convertible note";
    readonly value: "convertible_note";
}, {
    readonly label: "Debt";
    readonly value: "debt";
}];
export {};
//# sourceMappingURL=index.d.ts.map