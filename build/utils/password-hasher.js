"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinHasher = void 0;
const crypto_1 = require("crypto");
function scryptAsync(password_1, salt_1, keylen_1) {
    return __awaiter(this, arguments, void 0, function* (password, salt, keylen, options = {}) {
        return yield new Promise((resolve, reject) => {
            (0, crypto_1.scrypt)(password, salt, keylen, options, (err, derivedKey) => {
                if (err)
                    return reject(err);
                resolve(derivedKey);
            });
        });
    });
}
// Storage format: scrypt$N$r$p$saltBase64$hashBase64
// Defaults chosen for fast hashing suitable for short PINs but with reasonable cost.
const DEFAULT_SCRYPT_PARAMS = {
    N: 1 << 15, // 32768
    r: 8,
    p: 1,
    keyLen: 32,
    saltLen: 16,
};
function encodeParams(N, r, p) {
    return `${N}$${r}$${p}`;
}
function decodeParams(encoded) {
    const [nStr, rStr, pStr] = encoded.split('$');
    const N = Number(nStr);
    const r = Number(rStr);
    const p = Number(pStr);
    if (!Number.isFinite(N) || !Number.isFinite(r) || !Number.isFinite(p)) {
        throw new Error('Invalid scrypt params');
    }
    return { N, r, p };
}
class PinHasher {
    static hashPin(pin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pinString = typeof pin === 'number' ? pin.toString() : pin;
                const salt = (0, crypto_1.randomBytes)(DEFAULT_SCRYPT_PARAMS.saltLen);
                const { N, r, p, keyLen } = DEFAULT_SCRYPT_PARAMS;
                const derivedKey = yield scryptAsync(pinString, salt, keyLen, { N, r, p });
                const result = `scrypt$${encodeParams(N, r, p)}$${salt.toString('base64')}$${derivedKey.toString('base64')}`;
                return result;
            }
            catch (error) {
                throw new Error('Failed to hash PIN');
            }
        });
    }
    static comparePin(plainPin, hashedPin) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pinString = typeof plainPin === 'number' ? plainPin.toString() : plainPin;
                // Expect format: scrypt$N$r$p$saltBase64$hashBase64
                const parts = hashedPin.split('$');
                if (parts.length !== 6 || parts[0] !== 'scrypt')
                    return false;
                const { N, r, p } = decodeParams(`${parts[1]}$${parts[2]}$${parts[3]}`);
                const salt = Buffer.from(parts[4], 'base64');
                const storedHash = Buffer.from(parts[5], 'base64');
                const derivedKey = yield scryptAsync(pinString, salt, storedHash.length, { N, r, p });
                return (0, crypto_1.timingSafeEqual)(storedHash, derivedKey);
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.PinHasher = PinHasher;
//# sourceMappingURL=password-hasher.js.map