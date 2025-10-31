"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDate = normalizeDate;
function normalizeDate(input) {
    if (!input)
        return new Date(0); // fail-safe
    if (typeof input === 'number')
        return new Date(input * 1000);
    if (typeof input === 'string')
        return new Date(input);
    return input;
}
//# sourceMappingURL=misc.js.map