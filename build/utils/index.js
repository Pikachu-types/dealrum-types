"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumValue = getEnumValue;
exports.getEnumValueSafe = getEnumValueSafe;
exports.getEnumValueByString = getEnumValueByString;
exports.isValidEnumKey = isValidEnumKey;
exports.normalize = normalize;
/**
 * Generic function to get enum value by key
 * @param enumObj - The enum object to search in
 * @param key - The key to search for
 * @returns The value if found, undefined otherwise
 */
function getEnumValue(enumObj, key) {
    return enumObj[key];
}
/**
 * Type-safe version that ensures the key exists in the enum
 * @param enumObj - The enum object to search in
 * @param key - The key to search for (must be a valid key of the enum)
 * @returns The value for the given key
 */
function getEnumValueSafe(enumObj, key) {
    return enumObj[key];
}
/**
 * Flexible enum value getter that accepts string and returns the value if valid
 * @param enumObj - The enum object to search in
 * @param key - The string key to search for
 * @returns The value if the key exists in the enum, undefined otherwise
 */
function getEnumValueByString(enumObj, key) {
    if (key in enumObj) {
        return enumObj[key];
    }
    return undefined;
}
/**
 * Type guard to check if a string is a valid key for an enum
 * @param enumObj - The enum object to check against
 * @param key - The string to check
 * @returns True if the key exists in the enum
 */
function isValidEnumKey(enumObj, key) {
    return key in enumObj;
}
function normalize(text) {
    return text.trim().toLowerCase();
}
// Export tenant utilities
__exportStar(require("./tenant"), exports);
//# sourceMappingURL=index.js.map