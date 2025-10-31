import { AuthenticationProvider, SocialLinkTypes } from "../..";
import { Model } from "../model";
export type User = {
    naming: {
        first: string;
        last: string;
    };
    email: string;
    roles: {
        founder?: boolean | null;
        investor?: boolean | null;
        tenant_admin?: boolean | null;
    };
    photoUrl: string | null | undefined;
    eid?: string;
    gptCredits?: number | null;
    slots?: number | null;
    dealroomSlots?: number | null;
    phone: string | null | undefined;
    security: {
        emailVerified: boolean;
        phoneVerified: boolean;
        authProvider: AuthenticationProvider;
    };
    bio?: {
        socials: {
            provider: SocialLinkTypes;
            link?: string;
        }[];
        about?: string | null;
        miniBio?: string | null;
    } | null;
    joined: Date | null | string | number;
    lastSeen?: Date | null | string | number;
    id: string;
    tenant_id?: string | null;
    tenant_roles?: string[];
};
export declare class UserModel extends Model<User> {
    get accountIsValid(): boolean;
    static createFullName(name: {
        first: string;
        last: string;
        middle?: string;
    }): string;
    get fullname(): string;
    /**
     * Check if user belongs to a specific tenant
     */
    belongsToTenant(tenantId: string): boolean;
    /**
     * Check if user is a tenant admin
     */
    isTenantAdmin(): boolean;
    /**
     * Check if user has a specific tenant role
     */
    hasTenantRole(role: string): boolean;
    /**
     * Add a tenant role to the user
     */
    addTenantRole(role: string): void;
    /**
     * Remove a tenant role from the user
     */
    removeTenantRole(role: string): void;
    /**
     * Assign user to a tenant
     */
    assignToTenant(tenantId: string): void;
    /**
     * Remove user from tenant
     */
    removeFromTenant(): void;
    /**
     * Get user's tenant ID
     */
    getTenantId(): string | null;
    /**
     * Get user's tenant roles
     */
    getTenantRoles(): string[];
}
