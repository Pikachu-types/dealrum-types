"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContributionsModel = void 0;
const model_1 = require("../../model");
class ContributionsModel extends model_1.Model {
}
exports.ContributionsModel = ContributionsModel;
/**
 * Calculate total contributions from a list
 * @param contributions - Array of contributions
 * @param currency - Optional currency filter
 * @param statusFilter - Optional status filter (defaults to ['pledged', 'paid'])
 * @returns Object with total amount, currency, and count
 */
ContributionsModel.calculateContributions = (contributions, currency, statusFilter = ['pending', 'paid']) => {
    var _a;
    const filtered = contributions.filter((c) => statusFilter.includes(c.status) && (!currency || c.currency === currency));
    const total = filtered.reduce((sum, c) => sum + c.amount, 0);
    return {
        total,
        currency: currency || ((_a = filtered[0]) === null || _a === void 0 ? void 0 : _a.currency) || 'USD',
        count: filtered.length,
    };
};
//# sourceMappingURL=contributions.js.map