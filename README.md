# `@pikachu/dealrum-types`

Shared **TypeScript types**, **constants**, and small **runtime helpers** for the [Dealrum](https://www.dealrum.com) app: Firestore-backed tenants, workspace licensing, funnel definitions, and pipeline submissions.

This package is consumed by the main Dealrum Next.js repo via a workspace dependency (`"file:./packages/dealrum-types"`). The entry point is a **single module**: `src/index.ts` (also exposed as `types` / `main` in `package.json` for bundlers that resolve TypeScript directly).

---

## Install and build

From the **repository root** (recommended):

```bash
npm install
```

From **this package directory**:

```bash
npm run build
```

`npm run build` runs `tsc` and emits declarations (and JS) under **`dist/`**. The host app typically imports from **`./src/index.ts`** as configured in `package.json`, so a local build is optional unless you publish or run tools that expect `dist/`.

**Peer dependency:** `zod` (^3.25) — the host app provides it for shared validation patterns alongside these types.

---

## Firestore layout (`collections`)

| Export | Path / pattern |
| --- | --- |
| `collections.users` | `users` |
| `collections.tenants` | `tenants` |
| `collections.funnels(tenantId)` | `tenants/{tenantId}/funnels` |
| `collections.funnelSubmissions(tenantId)` | `tenants/{tenantId}/funnelSubmissions` |

---

## Workspace licensing

Types used with Stripe **lifetime** workspace checkout and server-side quota logic:

- **`WorkspaceLicenseTier`**: `"core" \| "scale" \| "operator"`.
- **`WorkspaceLicense`**: `tier`, `maxWorkspaces`, `purchasedAt`, optional Stripe ids, and **`additionalFunnelSlots`** (purchased **+1 active funnel** capacity per unit; enforced in app code with tier baselines).

Optional **`User.workspaceLicense`** documents the signed-in owner’s purchased license (invited workspace members do not require their own license).

---

## Tenants and members

- **`Tenant`**: workspace identity (`slug`, `name`, `owner`, `members`, branding, `domains` / `configuration` for custom host, `description`, `settings`, etc.).
- **`TenantModel`**: `fromJson`, **`domain(host)`** (custom domain vs `{slug}.{host}`), **`userRole(uid)`**.
- **`TenantMember`**, **`DashboardRoles`**.

---

## Funnels and intake

- **`FunnelConfig`**: funnel document (`sections`, optional `name` / `description` / **`metadata`**, **`status`** `active \| archived`, **`isPrimary`**). Only **active** funnels count toward the **owner’s** cross-workspace active-funnel quota in the app.
- **`FunnelSection`**, **`FunnelField`**, **`FunnelFieldType`**, **`fieldTypes`** (canonical field type keys for editors and Zod).
- **`FunnelSubmission`**: applicant payload snapshot, **`funnelConfigId`**, **`stage`** (see **`FunnelStages`**), `status`, optional files and notes.
- **`FunnelSubmissionStatus`**, **`FunnelStages`** (`inbox`, `longlist`, `shortlist`, `closed`, `rejected`).

---

## Users

- **`User`**: profile, **`naming`**, **`security`**, optional **`workspaceLicense`**.
- **`AuthProviderKind`**.
- **`UserModel`**: `fromJson`, **`fullname`** getter.

---

## Other exports

- **`Company`**, **`OptionSchema`** — shared shapes where the product still references them.
- **`fundingRounds`**, **`raiseInstrument`** — small labeled option lists for forms.

---

## Adding or changing types

1. Edit **`src/index.ts`** (keep exports explicit and documented with short JSDoc where behavior is non-obvious).
2. Run **`npm run build`** here to confirm `tsc` passes.
3. In the host app, fix any follow-on imports or server rules; keep Firestore rules and Admin paths aligned with **`collections`**.

---

## Repository

Package metadata and links live in **`package.json`** (`repository`, `bugs`, `homepage`). When this folder is vendored inside the monorepo, treat this README as the **source of truth** for what the types package guarantees; the root app **`README.md`** describes end-to-end product behavior.
