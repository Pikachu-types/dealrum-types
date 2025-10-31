"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealroomModel = void 0;
const model_1 = require("../model");
class DealroomModel extends model_1.Model {
    /**
     * Check if dealroom belongs to a specific tenant
     */
    belongsToTenant(tenantId) {
        return this.data.tenant_id === tenantId;
    }
    /**
     * Assign dealroom to a tenant
     */
    assignToTenant(tenantId) {
        this.data.tenant_id = tenantId;
    }
    /**
     * Remove dealroom from tenant
     */
    removeFromTenant() {
        this.data.tenant_id = null;
    }
    /**
     * Get dealroom's tenant ID
     */
    getTenantId() {
        return this.data.tenant_id || null;
    }
    /**
     * Check if dealroom is discoverable within tenant context
     */
    isDiscoverableInTenant() {
        return this.data.discoverable && this.data.tenant_id !== null;
    }
}
exports.DealroomModel = DealroomModel;
//# sourceMappingURL=index.js.map