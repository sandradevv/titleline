// SPDX-License-Identifier: Apache-2.0
//
// ClosingTable: an in-process stand-in for the network. It holds the public
// contract state and lets each Signatory run circuits against it with their
// own private folder, recording every witness value handed to the prover.

import {
  createCircuitContext,
  createConstructorContext,
  sampleContractAddress,
  type CircuitContext,
  type CircuitResults,
} from '@midnight-ntwrk/compact-runtime';
import {
  Contract,
  ledger as decodeLedger,
  type EscrowContractTerms,
  type Ledger,
  type Witnesses,
} from './managed/titleline/contract/index.js';
import { openFolder, witnesses, type TitlelinePrivateState } from './witnesses.js';

type Folder = TitlelinePrivateState;
type Chain = Parameters<typeof createCircuitContext<Folder>>[0]['contractState'];
type Step<R> = (k: Contract<Folder>, cx: CircuitContext<Folder>) => Promise<CircuitResults<Folder, R>>;

const NULL_COIN = ''.padEnd(64, '0');

export type WitnessEntry = { readonly witness: string; readonly value: unknown };

export class ClosingTable {
  readonly address = sampleContractAddress();
  readonly witnessTrail: WitnessEntry[] = [];

  private constructor(public contractState: Chain) {}

  /** Deploy a fresh escrow contract; the deployer becomes title registry admin. */
  static async deploy(adminSecret: Uint8Array): Promise<ClosingTable> {
    const genesis = await new Contract<Folder>(witnesses).initialState(
      createConstructorContext<Folder>(openFolder(adminSecret), NULL_COIN),
    );
    return new ClosingTable(genesis.currentContractState.data);
  }

  join(
    secretKey: Uint8Array,
    terms?: EscrowContractTerms,
    salt?: Uint8Array,
    availableFunds?: bigint,
    attestationSalt?: Uint8Array,
  ): Signatory {
    return new Signatory(this, openFolder(secretKey, terms, salt, availableFunds, attestationSalt));
  }

  read(): Ledger {
    return decodeLedger(this.contractState as Parameters<typeof decodeLedger>[0]);
  }

  async submit<R>(by: Signatory, circuitId: string, step: Step<R>): Promise<R> {
    const outcome = await step(
      this.tracedContract(),
      createCircuitContext<Folder>({
        circuitId,
        contractAddress: this.address,
        coinPublicKeyOrZswapState: NULL_COIN,
        contractState: this.contractState,
        privateState: by.folder,
      }),
    );
    const { callContext } = outcome.context;
    this.contractState = callContext.currentQueryContext.state;
    if (callContext.currentPrivateState !== undefined) by.folder = callContext.currentPrivateState;
    return outcome.result;
  }

  private tracedContract(): Contract<Folder> {
    const traced: Record<string, unknown> = {};
    for (const [name, original] of Object.entries(witnesses)) {
      traced[name] = (...args: unknown[]) => {
        const pair = (original as (...a: unknown[]) => [Folder, unknown])(...args);
        this.witnessTrail.push({ witness: name, value: pair[1] });
        return pair;
      };
    }
    return new Contract<Folder>(traced as unknown as Witnesses<Folder>);
  }
}

export class Signatory {
  constructor(private readonly table: ClosingTable, public folder: Folder) {}

  registerAttestor(attestor: Uint8Array) {
    return this.table.submit(this, 'registerAttestor', (k, cx) => k.impureCircuits.registerAttestor(cx, attestor));
  }

  submitAttestedFunds(commitment: Uint8Array) {
    return this.table.submit(this, 'submitAttestedFunds', (k, cx) =>
      k.impureCircuits.submitAttestedFunds(cx, commitment),
    );
  }

  depositEarnestMoney(id: Uint8Array, buyer: Uint8Array, seller: Uint8Array, agent: Uint8Array, at: bigint) {
    return this.table.submit(this, 'depositEarnestMoney', (k, cx) =>
      k.impureCircuits.depositEarnestMoney(cx, id, buyer, seller, agent, at),
    );
  }

  approveTitleInspection(id: Uint8Array, reportHash: Uint8Array) {
    return this.table.submit(this, 'approveTitleInspection', (k, cx) =>
      k.impureCircuits.approveTitleInspection(cx, id, reportHash),
    );
  }

  closeAndSettleDeal(id: Uint8Array) {
    return this.table.submit(this, 'closeAndSettleDeal', (k, cx) => k.impureCircuits.closeAndSettleDeal(cx, id));
  }

  refundBuyerEarnest(id: Uint8Array, now: bigint) {
    return this.table.submit(this, 'refundBuyerEarnest', (k, cx) => k.impureCircuits.refundBuyerEarnest(cx, id, now));
  }
}
