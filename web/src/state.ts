// Browser-side model of one closing file. Mirrors the contract's EscrowState
// ordering so the deal summary reads the same as the on-chain status names.

export const STAGES = ['OPEN', 'FUNDED', 'INSPECTED', 'CLOSED', 'REFUNDED'] as const;
export type Stage = (typeof STAGES)[number];

export type StepKey = 'funds' | 'earnest' | 'title' | 'closing' | 'refund';

export interface Keyring {
  buyer: Uint8Array;
  seller: Uint8Array;
  agent: Uint8Array;
  bank: Uint8Array;
}

export interface ClosingFile {
  parcel: number;
  price: bigint;
  earnest: bigint;
  funds: bigint;
  salt: Uint8Array;
  escrowId: Uint8Array;
  stage: Stage;
  fundsSeal?: string;
  deedToken?: string;
  settlementMark?: string;
  done: Set<StepKey>;
}

export const blankFile = (): ClosingFile => ({
  parcel: 44109,
  price: 2_400_000n,
  earnest: 150_000n,
  funds: 3_100_000n,
  salt: crypto.getRandomValues(new Uint8Array(32)),
  escrowId: crypto.getRandomValues(new Uint8Array(32)),
  stage: 'OPEN',
  done: new Set(),
});
