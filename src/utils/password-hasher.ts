import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from 'crypto';

async function scryptAsync(
  password: string | Buffer,
  salt: string | Buffer,
  keylen: number,
  options: { N?: number; r?: number; p?: number } = {}
): Promise<Buffer> {
  return await new Promise<Buffer>((resolve, reject) => {
    scryptCallback(password, salt, keylen, options, (err, derivedKey) => {
      if (err) return reject(err);
      resolve(derivedKey as Buffer);
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

function encodeParams(N: number, r: number, p: number): string {
  return `${N}$${r}$${p}`;
}

function decodeParams(encoded: string): { N: number; r: number; p: number } {
  const [nStr, rStr, pStr] = encoded.split('$');
  const N = Number(nStr);
  const r = Number(rStr);
  const p = Number(pStr);
  if (!Number.isFinite(N) || !Number.isFinite(r) || !Number.isFinite(p)) {
    throw new Error('Invalid scrypt params');
  }
  return { N, r, p };
}

export class PinHasher {
  static async hashPin(pin: number | string): Promise<string> {
    try {
      const pinString = typeof pin === 'number' ? pin.toString() : pin;
      const salt = randomBytes(DEFAULT_SCRYPT_PARAMS.saltLen);
      const { N, r, p, keyLen } = DEFAULT_SCRYPT_PARAMS;
      const derivedKey = await scryptAsync(pinString, salt, keyLen, { N, r, p });
      const result = `scrypt$${encodeParams(N, r, p)}$${salt.toString('base64')}$${derivedKey.toString('base64')}`;
      return result;
    } catch (error) {
      throw new Error('Failed to hash PIN');
    }
  }

  static async comparePin(plainPin: number | string, hashedPin: string): Promise<boolean> {
    try {
      const pinString = typeof plainPin === 'number' ? plainPin.toString() : plainPin;
      // Expect format: scrypt$N$r$p$saltBase64$hashBase64
      const parts = hashedPin.split('$');
      if (parts.length !== 6 || parts[0] !== 'scrypt') return false;
      const { N, r, p } = decodeParams(`${parts[1]}$${parts[2]}$${parts[3]}`);
      const salt = Buffer.from(parts[4], 'base64');
      const storedHash = Buffer.from(parts[5], 'base64');
      const derivedKey = await scryptAsync(pinString, salt, storedHash.length, { N, r, p });
      return timingSafeEqual(storedHash, derivedKey);
    } catch (error) {
      return false;
    }
  }
}