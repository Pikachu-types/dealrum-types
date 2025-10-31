"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const model_1 = require("../model");
class UserModel extends model_1.Model {
    get accountIsValid() {
        return this.data.naming.first.length > 1 && this.data.naming.last.length > 1;
    }
    static createFullName(name) {
        return `${name.first}${name.middle ? ` ${name.middle}` : ''} ${name.last}`;
    }
    get fullname() {
        var _a, _b;
        const naming = this.data.naming;
        // Handle null/undefined input
        if (!naming) {
            return '';
        }
        // Trim whitespace and handle empty strings
        const firstName = ((_a = naming.first) === null || _a === void 0 ? void 0 : _a.trim()) || '';
        const lastName = ((_b = naming.last) === null || _b === void 0 ? void 0 : _b.trim()) || '';
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
    belongsToTenant(tenantId) {
        return this.data.tenant_id === tenantId;
    }
    /**
     * Check if user is a tenant admin
     */
    isTenantAdmin() {
        return this.data.roles.tenant_admin === true;
    }
    /**
     * Check if user has a specific tenant role
     */
    hasTenantRole(role) {
        var _a;
        return ((_a = this.data.tenant_roles) === null || _a === void 0 ? void 0 : _a.includes(role)) || false;
    }
    /**
     * Add a tenant role to the user
     */
    addTenantRole(role) {
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
    removeTenantRole(role) {
        if (this.data.tenant_roles) {
            this.data.tenant_roles = this.data.tenant_roles.filter(r => r !== role);
        }
    }
    /**
     * Assign user to a tenant
     */
    assignToTenant(tenantId) {
        this.data.tenant_id = tenantId;
    }
    /**
     * Remove user from tenant
     */
    removeFromTenant() {
        this.data.tenant_id = null;
        this.data.tenant_roles = [];
    }
    /**
     * Get user's tenant ID
     */
    getTenantId() {
        return this.data.tenant_id || null;
    }
    /**
     * Get user's tenant roles
     */
    getTenantRoles() {
        return this.data.tenant_roles || [];
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=index.js.map