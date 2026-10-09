// SPDX-License-Identifier: Apache-2.0
//
// Private inputs the titleline circuits ask for. Each party at the closing
// table keeps its own bundle; nothing in here ever reaches the ledger in clear.

import type { WitnessContext } from '@midnight-ntwrk/compact-runtime';
import type {
  EscrowContractTerms,
  Ledger,
  Witnesses,
} from './managed/titleline/contract/index.js';

export type { EscrowContractTerms };

/** What a single signatory holds off-chain. */
export interface TitlelinePrivateState {
  readonly secretKey: Uint8Array;
  readonly terms?: EscrowContractTerms;
  readonly salt?: Uint8Array;
  readonly availableFunds?: bigint;
  readonly attestationSalt?: Uint8Array;
}

/** Raised when a circuit asks for a private input the caller never supplied. */
export class MissingDisclosure extends Error {
  override readonly name = 'MissingDisclosure';
}

type Folder = TitlelinePrivateState;
type Sheet = WitnessContext<Ledger, Folder>;

function pull<K extends keyof Folder>(folder: Folder, key: K, label: string): NonNullable<Folder[K]> {
  const value = folder[key];
  if (value === undefined || value === null) {
    throw new MissingDisclosure(`private folder has no ${label}`);
  }
  return value as NonNullable<Folder[K]>;
}

export const witnesses: Witnesses<Folder> = {
  privateKey: ({ privateState: f }: Sheet) => [f, f.secretKey],
  contractTerms: ({ privateState: f }: Sheet) => [f, pull(f, 'terms', 'contract terms')],
  contractSalt: ({ privateState: f }: Sheet) => [f, pull(f, 'salt', 'terms salt')],
  buyerAvailableFunds: ({ privateState: f }: Sheet) => [f, pull(f, 'availableFunds', 'funds figure')],
  attestationSalt: ({ privateState: f }: Sheet) => [f, pull(f, 'attestationSalt', 'attestation salt')],
};

/** Assemble a folder; omitted fields stay undefined so circuits needing them fail loudly. */
export const openFolder = (
  secretKey: Uint8Array,
  terms?: EscrowContractTerms,
  salt?: Uint8Array,
  availableFunds?: bigint,
  attestationSalt?: Uint8Array,
): Folder => ({ secretKey, terms, salt, availableFunds, attestationSalt });
