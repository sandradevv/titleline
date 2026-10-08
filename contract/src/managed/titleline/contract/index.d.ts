import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum EscrowState { deposited = 0,
                          title_inspected = 1,
                          settled = 2,
                          refunded = 3,
                          disputed = 4
}

export type EscrowContractTerms = { earnestDeposit: bigint;
                                    totalPurchasePrice: bigint;
                                    closingDeadline: bigint;
                                    propertyParcelId: bigint;
                                    currencyCode: bigint
                                  };

export type EscrowPropertyRecord = { buyer: Uint8Array;
                                     seller: Uint8Array;
                                     titleEscrowAgent: Uint8Array;
                                     termsCommitment: Uint8Array;
                                     status: EscrowState;
                                     createdAt: bigint;
                                     closingDeadline: bigint;
                                     minEarnestDeposit: bigint
                                   };

export type Witnesses<PS> = {
  privateKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  contractTerms(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, EscrowContractTerms];
  contractSalt(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  buyerAvailableFunds(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, bigint];
  attestationSalt(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  registerAttestor(context: __compactRuntime.CircuitContext<PS>,
                   attestorPublic_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  submitAttestedFunds(context: __compactRuntime.CircuitContext<PS>,
                      attestationCommitment_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  depositEarnestMoney(context: __compactRuntime.CircuitContext<PS>,
                      escrowId_0: Uint8Array,
                      buyerPublic_0: Uint8Array,
                      sellerPublic_0: Uint8Array,
                      titleAgentPublic_0: Uint8Array,
                      timestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  approveTitleInspection(context: __compactRuntime.CircuitContext<PS>,
                         escrowId_0: Uint8Array,
                         inspectionHash_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  closeAndSettleDeal(context: __compactRuntime.CircuitContext<PS>,
                     escrowId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundBuyerEarnest(context: __compactRuntime.CircuitContext<PS>,
                     escrowId_0: Uint8Array,
                     currentTimestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
}

export type ProvableCircuits<PS> = {
  registerAttestor(context: __compactRuntime.CircuitContext<PS>,
                   attestorPublic_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  submitAttestedFunds(context: __compactRuntime.CircuitContext<PS>,
                      attestationCommitment_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  depositEarnestMoney(context: __compactRuntime.CircuitContext<PS>,
                      escrowId_0: Uint8Array,
                      buyerPublic_0: Uint8Array,
                      sellerPublic_0: Uint8Array,
                      titleAgentPublic_0: Uint8Array,
                      timestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  approveTitleInspection(context: __compactRuntime.CircuitContext<PS>,
                         escrowId_0: Uint8Array,
                         inspectionHash_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  closeAndSettleDeal(context: __compactRuntime.CircuitContext<PS>,
                     escrowId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundBuyerEarnest(context: __compactRuntime.CircuitContext<PS>,
                     escrowId_0: Uint8Array,
                     currentTimestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
}

export type PureCircuits = {
  buyerKey(sk_0: Uint8Array): Uint8Array;
  sellerKey(sk_0: Uint8Array): Uint8Array;
  titleAgentKey(sk_0: Uint8Array): Uint8Array;
  attestorKey(sk_0: Uint8Array): Uint8Array;
  titleCommitment(terms_0: EscrowContractTerms,
                  buyer_0: Uint8Array,
                  salt_0: Uint8Array): Uint8Array;
  balanceAttestationCommitment(buyer_0: Uint8Array,
                               availableFunds_0: bigint,
                               salt_0: Uint8Array): Uint8Array;
  escrowNullifier(salt_0: Uint8Array, escrowId_0: Uint8Array): Uint8Array;
  deedReleaseToken(commitment_0: Uint8Array, recipient_0: Uint8Array): Uint8Array;
  refundToken(commitment_0: Uint8Array, buyer_0: Uint8Array): Uint8Array;
  hasSufficientFunds(available_0: bigint, required_0: bigint): boolean;
}

export type Circuits<PS> = {
  buyerKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  sellerKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  titleAgentKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  attestorKey(context: __compactRuntime.CircuitContext<PS>, sk_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  titleCommitment(context: __compactRuntime.CircuitContext<PS>,
                  terms_0: EscrowContractTerms,
                  buyer_0: Uint8Array,
                  salt_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  balanceAttestationCommitment(context: __compactRuntime.CircuitContext<PS>,
                               buyer_0: Uint8Array,
                               availableFunds_0: bigint,
                               salt_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  escrowNullifier(context: __compactRuntime.CircuitContext<PS>,
                  salt_0: Uint8Array,
                  escrowId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  deedReleaseToken(context: __compactRuntime.CircuitContext<PS>,
                   commitment_0: Uint8Array,
                   recipient_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundToken(context: __compactRuntime.CircuitContext<PS>,
              commitment_0: Uint8Array,
              buyer_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  hasSufficientFunds(context: __compactRuntime.CircuitContext<PS>,
                     available_0: bigint,
                     required_0: bigint): Promise<__compactRuntime.CircuitResults<PS, boolean>>;
  registerAttestor(context: __compactRuntime.CircuitContext<PS>,
                   attestorPublic_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  submitAttestedFunds(context: __compactRuntime.CircuitContext<PS>,
                      attestationCommitment_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  depositEarnestMoney(context: __compactRuntime.CircuitContext<PS>,
                      escrowId_0: Uint8Array,
                      buyerPublic_0: Uint8Array,
                      sellerPublic_0: Uint8Array,
                      titleAgentPublic_0: Uint8Array,
                      timestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, []>>;
  approveTitleInspection(context: __compactRuntime.CircuitContext<PS>,
                         escrowId_0: Uint8Array,
                         inspectionHash_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, []>>;
  closeAndSettleDeal(context: __compactRuntime.CircuitContext<PS>,
                     escrowId_0: Uint8Array): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
  refundBuyerEarnest(context: __compactRuntime.CircuitContext<PS>,
                     escrowId_0: Uint8Array,
                     currentTimestamp_0: bigint): Promise<__compactRuntime.CircuitResults<PS, Uint8Array>>;
}

export type Ledger = {
  readonly titleRegistryAdmin: Uint8Array;
  certifiedAttestors: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<[Uint8Array, boolean]>
  };
  attestedFundsRegistry: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<[Uint8Array, boolean]>
  };
  properties: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): EscrowPropertyRecord;
    [Symbol.iterator](): Iterator<[Uint8Array, EscrowPropertyRecord]>
  };
  readonly propertyCount: bigint;
  settlementNullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<[Uint8Array, boolean]>
  };
  titleInspectionProofs: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): Uint8Array;
    [Symbol.iterator](): Iterator<[Uint8Array, Uint8Array]>
  };
}

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): Promise<__compactRuntime.ConstructorResult<PS>>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
export declare const expectedVk: Record<string, string>;
export declare const circuitSignatures: __compactRuntime.CircuitSignatures;
export declare const declaredInterfaces: __compactRuntime.DeclaredInterfaces;
