/*
 * Preview digests for the closing checklist.
 *
 * Honesty note: everything here is plain SHA-256 over a tagged byte string so
 * the UI can show a fingerprint the instant a form is submitted. It is NOT the
 * contract's persistentHash and the values will not match the ledger. The real
 * circuits execute in chain.ts against the compiled titleline contract.
 */

const enc = new TextEncoder();

type Part = Uint8Array | bigint | number | string;

const asBytes = (p: Part): Uint8Array => {
  if (p instanceof Uint8Array) return p;
  if (typeof p === 'string') return enc.encode(p);
  const word = new Uint8Array(16);
  let n = BigInt(p);
  for (let i = 15; i >= 0; i--) {
    word[i] = Number(n & 0xffn);
    n >>= 8n;
  }
  return word;
};

export const hex = (b: Uint8Array, cut?: number): string => {
  let s = '';
  for (const byte of b) s += (byte < 16 ? '0' : '') + byte.toString(16);
  return cut ? `${s.slice(0, cut)}..${s.slice(-6)}` : s;
};

export async function digest(tag: string, ...parts: Part[]): Promise<Uint8Array> {
  const chunks = [enc.encode(`titleline/${tag}|`), ...parts.map(asBytes)];
  const size = chunks.reduce((n, c) => n + c.byteLength, 0);
  const joined = new Uint8Array(size);
  chunks.reduce((at, c) => (joined.set(c, at), at + c.byteLength), 0);
  return new Uint8Array(await crypto.subtle.digest('SHA-256', joined));
}

export const preview = {
  partyKey: (role: 'buyer' | 'seller' | 'agent' | 'bank', secret: Uint8Array) => digest(`key/${role}`, secret),
  fundsSeal: (buyer: Uint8Array, funds: bigint, salt: Uint8Array) => digest('funds', buyer, funds, salt),
  deedToken: (id: Uint8Array, price: bigint, agent: Uint8Array, salt: Uint8Array) =>
    digest('deed', id, price, agent, salt),
  settlementMark: (id: Uint8Array, seller: Uint8Array, salt: Uint8Array) => digest('settle', id, seller, salt),
};
