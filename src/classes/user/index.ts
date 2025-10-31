import { AuthenticationProvider, SocialLinkTypes } from "../..";
import { Model } from "../model";

export type User = {
  naming: {
    first: string;
    last: string;
  },
  email: string;
  roles: {
    founder?: boolean | null;
    investor?: boolean | null;
    tenant_admin?: boolean | null; // NEW: Tenant admin role
  },
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
  },
  bio?: {
    socials: {
      provider: SocialLinkTypes,
      link?: string
    }[],
    about?: string | null;
    miniBio?: string | null;
  } | null,
  joined: Date | null | string | number;
  lastSeen?: Date | null | string | number;
  id: string;
  // NEW: Multi-tenancy fields
  tenant_id?: string | null; // Tenant this user belongs to
  tenant_roles?: string[]; // Additional tenant-specific roles
}

export class UserModel extends Model<User> {

  public get accountIsValid(): boolean {
    return this.data.naming.first.length > 1 && this.data.naming.last.length > 1;
  }

  public static createFullName(name: {
    first: string;
    last: string;
    middle?: string;
  }): string {
    return `${name.first}${name.middle ? ` ${name.middle}` : ''} ${name.last}`;
  }

  public get fullname(): string {
    const naming = this.data.naming;
    // Handle null/undefined input
    if (!naming) {
      return '';
    }

    // Trim whitespace and handle empty strings
    const firstName = naming.first?.trim() || '';
    const lastName = naming.last?.trim() || '';

    // If both are empty, return empty string
    if (!firstName && !lastName) {
      return '';
    }

    // If only first name exists
    if (firstName && !lastName) {
      return firstName;
    }

    // If only last name exists
    if (!firstName && lastName) {
      return lastName;
    }

    // Both names exist
    return `${firstName} ${lastName}`;
  }

  // NEW: Tenant-related methods
  
  /**
   * Check if user belongs to a specific tenant
   */
  public belongsToTenant(tenantId: string): boolean {
    return this.data.tenant_id === tenantId;
  }
  
  /**
   * Check if user is a tenant admin
   */
  public isTenantAdmin(): boolean {
    return this.data.roles.tenant_admin === true;
  }
  
  /**
   * Check if user has a specific tenant role
   */
  public hasTenantRole(role: string): boolean {
    return this.data.tenant_roles?.includes(role) || false;
  }
  
  /**
   * Add a tenant role to the user
   */
  public addTenantRole(role: string): void {
    if (!this.data.tenant_roles) {
      this.data.tenant_roles = [];
    }
    if (!this.data.tenant_roles.includes(role)) {
      this.data.tenant_roles.push(role);
    }
  }
  
  /**
   * Remove a tenant role from the user
   */
  public removeTenantRole(role: string): void {
    if (this.data.tenant_roles) {
      this.data.tenant_roles = this.data.tenant_roles.filter(r => r !== role);
    }
  }
  
  /**
   * Assign user to a tenant
   */
  public assignToTenant(tenantId: string): void {
    this.data.tenant_id = tenantId;
  }
  
  /**
   * Remove user from tenant
   */
  public removeFromTenant(): void {
    this.data.tenant_id = null;
    this.data.tenant_roles = [];
  }
  
  /**
   * Get user's tenant ID
   */
  public getTenantId(): string | null {
    return this.data.tenant_id || null;
  }
  
  /**
   * Get user's tenant roles
   */
  public getTenantRoles(): string[] {
    return this.data.tenant_roles || [];
  }
}
 