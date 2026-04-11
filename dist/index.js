/** Firestore collection paths used by Dealrum (intake + pipeline MVP). */
export const collections = {
    users: "users",
    tenants: "tenants",
    /** One funnel definition per doc (name, description, sections). */
    funnels: (tenantId) => `tenants/${tenantId}/funnels`,
    funnelSubmissions: (tenantId) => `tenants/${tenantId}/funnelSubmissions`,
};
export class UserModel {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    static fromJson(data) {
        return new UserModel({ ...data, id: data.id });
    }
    get fullname() {
        const { first, last } = this.schema.naming;
        return [first, last].filter(Boolean).join(" ").trim() || this.schema.email;
    }
}
export class TenantModel {
    tenant;
    constructor(tenant) {
        this.tenant = tenant;
    }
    static fromJson(t) {
        return new TenantModel(t);
    }
    /** Public origin for this tenant (apply link host). */
    domain(host) {
        const cfg = this.tenant.configuration;
        if (cfg?.domain) {
            return `https://${cfg.domain}`;
        }
        return `https://${this.tenant.slug}.${host}`;
    }
    userRole(uid) {
        const m = this.tenant.members?.[uid];
        const r = m?.role;
        if (r === "admin" || r === "partner" || r === "analyst" || r === "viewer")
            return r;
        if (this.tenant.owner === uid)
            return "admin";
        return (m ? "viewer" : undefined);
    }
}
export const fieldTypes = {
    text: "text",
    textarea: "textarea",
    url: "url",
    email: "email",
    number: "number",
    select: "select",
    multiselect: "multiselect",
    file: "file",
    switch: "switch",
    radio: "radio",
    date: "date",
};
export const fundingRounds = [
    { label: "Pre-seed", value: "pre_seed" },
    { label: "Seed", value: "seed" },
    { label: "Series A", value: "series_a" },
    { label: "Series B+", value: "series_b_plus" },
];
export const raiseInstrument = [
    { label: "Equity", value: "equity" },
    { label: "SAFE", value: "safe" },
    { label: "Convertible note", value: "convertible_note" },
    { label: "Debt", value: "debt" },
];
