// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'vitest';
import {
  EscrowState,
  pureCircuits,
  type EscrowContractTerms,
} from '../../contract/src/managed/titleline/contract/index.js';
import { ClosingTable } from '../../contract/src/simulator.js';
import { TitleDomain } from '../../contract/src/domain/titleline.js';

function randomBytes(length: number = 32): Uint8Array {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function makeTerms(
  earnestDeposit: bigint = 50_000n,
  totalPurchasePrice: bigint = 750_000n,
  closingDeadline: bigint = 20_000n,
): EscrowContractTerms {
  return {
    earnestDeposit,
    totalPurchasePrice,
    closingDeadline,
    propertyParcelId: 88204n,
    currencyCode: 1n,
  };
}

describe('Titleline Real Estate Earnest Money Escrow Execution', () => {
  describe('Pure Circuits & Proof-of-Funds Verification', () => {
    it('creates domain-separated identities for transaction participants', () => {
      const sk = randomBytes(32);
      const bKey = pureCircuits.buyerKey(sk);
      const sKey = pureCircuits.sellerKey(sk);
      const aKey = pureCircuits.titleAgentKey(sk);
      const attKey = pureCircuits.attestorKey(sk);

      expect(bKey).toHaveLength(32);
      expect(sKey).toHaveLength(32);
      expect(aKey).toHaveLength(32);
      expect(attKey).toHaveLength(32);

      expect(bKey).not.toEqual(sKey);
      expect(bKey).not.toEqual(aKey);
      expect(bKey).not.toEqual(attKey);
      expect(sKey).not.toEqual(aKey);
    });

    it('validates proof-of-funds predicate matching TypeScript domain logic', () => {
      expect(pureCircuits.hasSufficientFunds(1_000_000n, 750_000n)).toBe(true);
      expect(pureCircuits.hasSufficientFunds(750_000n, 750_000n)).toBe(true);
      expect(pureCircuits.hasSufficientFunds(600_000n, 750_000n)).toBe(false);

      expect(pureCircuits.hasSufficientFunds(800_000n, 750_000n)).toBe(
        TitleDomain.hasSufficientFunds(800_000n, 750_000n),
      );
    });
  });

  describe('Contract Lifecycle & Certified Bank Attestations', () => {
    it('deploys contract with title registry admin in sealed state', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);
      const state = ledger.read();

      expect(state.titleRegistryAdmin).toEqual(pureCircuits.titleAgentKey(adminSk));
      expect(state.propertyCount).toBe(0n);
    });

    it('rejects deposit when buyer funds lack a certified bank attestation on ledger', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);

      const buyerSk = randomBytes(32);
      const sellerSk = randomBytes(32);
      const escrowId = randomBytes(32);
      const terms = makeTerms();
      const salt = randomBytes(32);
      const attSalt = randomBytes(32);
      const availableFunds = 900_000n;

      // Buyer tries to deposit without any bank attestation registered on ledger
      const buyer = ledger.join(buyerSk, terms, salt, availableFunds, attSalt);
      await expect(
        buyer.depositEarnestMoney(
          escrowId,
          pureCircuits.buyerKey(buyerSk),
          pureCircuits.sellerKey(sellerSk),
          pureCircuits.titleAgentKey(adminSk),
          1000n,
        ),
      ).rejects.toThrow('No certified bank attestation found for buyer funds');
    });

    it('deposits earnest money successfully when certified bank commits funds attestation', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);

      // Title admin authorizes Bank as certified attestor
      const bankSk = randomBytes(32);
      const bankPub = pureCircuits.attestorKey(bankSk);
      const titleAdmin = ledger.join(adminSk);
      await titleAdmin.registerAttestor(bankPub);

      const buyerSk = randomBytes(32);
      const sellerSk = randomBytes(32);
      const buyerPub = pureCircuits.buyerKey(buyerSk);
      const escrowId = randomBytes(32);
      const terms = makeTerms();
      const salt = randomBytes(32);
      const attSalt = randomBytes(32);
      const availableFunds = 900_000n; // > 750,000 required

      // Bank commits certified balance attestation on ledger
      const attCommit = pureCircuits.balanceAttestationCommitment(buyerPub, availableFunds, attSalt);
      const bank = ledger.join(bankSk);
      await bank.submitAttestedFunds(attCommit);

      // Buyer deposits earnest money with verified proof-of-funds
      const buyer = ledger.join(buyerSk, terms, salt, availableFunds, attSalt);
      await buyer.depositEarnestMoney(
        escrowId,
        buyerPub,
        pureCircuits.sellerKey(sellerSk),
        pureCircuits.titleAgentKey(adminSk),
        1000n,
      );

      const state = ledger.read();
      expect(state.propertyCount).toBe(1n);
      expect(state.properties.lookup(escrowId).status).toBe(EscrowState.deposited);
    });

    it('rejects deposit if attested balance is below purchase price', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);

      const bankSk = randomBytes(32);
      const bankPub = pureCircuits.attestorKey(bankSk);
      const titleAdmin = ledger.join(adminSk);
      await titleAdmin.registerAttestor(bankPub);

      const buyerSk = randomBytes(32);
      const sellerSk = randomBytes(32);
      const buyerPub = pureCircuits.buyerKey(buyerSk);
      const escrowId = randomBytes(32);
      const terms = makeTerms(50_000n, 750_000n);
      const salt = randomBytes(32);
      const attSalt = randomBytes(32);
      const inadequateFunds = 500_000n; // Inadequate: < 750,000 required

      const attCommit = pureCircuits.balanceAttestationCommitment(buyerPub, inadequateFunds, attSalt);
      const bank = ledger.join(bankSk);
      await bank.submitAttestedFunds(attCommit);

      const buyer = ledger.join(buyerSk, terms, salt, inadequateFunds, attSalt);
      await expect(
        buyer.depositEarnestMoney(
          escrowId,
          buyerPub,
          pureCircuits.sellerKey(sellerSk),
          pureCircuits.titleAgentKey(adminSk),
          1000n,
        ),
      ).rejects.toThrow('Proof-of-funds verification failed: available funds below purchase price');
    });

    it('approves title inspection and settles deal to seller with deed release token', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);

      const bankSk = randomBytes(32);
      await ledger.join(adminSk).registerAttestor(pureCircuits.attestorKey(bankSk));

      const buyerSk = randomBytes(32);
      const sellerSk = randomBytes(32);
      const buyerPub = pureCircuits.buyerKey(buyerSk);
      const escrowId = randomBytes(32);
      const terms = makeTerms();
      const salt = randomBytes(32);
      const attSalt = randomBytes(32);
      const availableFunds = 1_000_000n;

      const attCommit = pureCircuits.balanceAttestationCommitment(buyerPub, availableFunds, attSalt);
      await ledger.join(bankSk).submitAttestedFunds(attCommit);

      const buyer = ledger.join(buyerSk, terms, salt, availableFunds, attSalt);
      await buyer.depositEarnestMoney(
        escrowId,
        buyerPub,
        pureCircuits.sellerKey(sellerSk),
        pureCircuits.titleAgentKey(adminSk),
        1000n,
      );

      // Certified title company inspects property parcel title
      const titleAgent = ledger.join(adminSk, terms, salt);
      const inspectionHash = randomBytes(32);
      await titleAgent.approveTitleInspection(escrowId, inspectionHash);

      const stateInspected = ledger.read();
      expect(stateInspected.properties.lookup(escrowId).status).toBe(EscrowState.title_inspected);
      expect(stateInspected.titleInspectionProofs.lookup(escrowId)).toEqual(inspectionHash);

      // Close and settle deal
      const deedToken = await titleAgent.closeAndSettleDeal(escrowId);
      expect(deedToken).toHaveLength(32);

      const stateSettled = ledger.read();
      expect(stateSettled.properties.lookup(escrowId).status).toBe(EscrowState.settled);

      // Double settle prevented
      await expect(titleAgent.closeAndSettleDeal(escrowId)).rejects.toThrow(
        'Title not inspected and approved',
      );
    });

    it('allows buyer to refund earnest deposit if closing deadline passes without title clearance', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);

      const bankSk = randomBytes(32);
      await ledger.join(adminSk).registerAttestor(pureCircuits.attestorKey(bankSk));

      const buyerSk = randomBytes(32);
      const sellerSk = randomBytes(32);
      const buyerPub = pureCircuits.buyerKey(buyerSk);
      const escrowId = randomBytes(32);
      const terms = makeTerms(50_000n, 750_000n, 5_000n); // closing deadline at 5,000
      const salt = randomBytes(32);
      const attSalt = randomBytes(32);
      const availableFunds = 800_000n;

      const attCommit = pureCircuits.balanceAttestationCommitment(buyerPub, availableFunds, attSalt);
      await ledger.join(bankSk).submitAttestedFunds(attCommit);

      const buyer = ledger.join(buyerSk, terms, salt, availableFunds, attSalt);
      await buyer.depositEarnestMoney(
        escrowId,
        buyerPub,
        pureCircuits.sellerKey(sellerSk),
        pureCircuits.titleAgentKey(adminSk),
        1000n,
      );

      // Trying to refund before deadline expires fails
      await expect(buyer.refundBuyerEarnest(escrowId, 4_000n)).rejects.toThrow(
        'Closing deadline has not yet passed',
      );

      // After deadline expires (timestamp 6,000 > 5,000), refund succeeds
      const refToken = await buyer.refundBuyerEarnest(escrowId, 6_000n);
      expect(refToken).toHaveLength(32);

      const state = ledger.read();
      expect(state.properties.lookup(escrowId).status).toBe(EscrowState.refunded);

      // Cannot refund twice
      await expect(buyer.refundBuyerEarnest(escrowId, 7_000n)).rejects.toThrow(
        'Escrow not in refundable deposited state',
      );
    });

    it('proves privacy: buyer bank balance and full price remain private', async () => {
      const adminSk = randomBytes(32);
      const ledger = await ClosingTable.deploy(adminSk);

      const bankSk = randomBytes(32);
      await ledger.join(adminSk).registerAttestor(pureCircuits.attestorKey(bankSk));

      const buyerSk = randomBytes(32);
      const sellerSk = randomBytes(32);
      const buyerPub = pureCircuits.buyerKey(buyerSk);
      const escrowId = randomBytes(32);
      const terms = makeTerms(55_555n, 12_345_678n);
      const salt = randomBytes(32);
      const attSalt = randomBytes(32);
      const availableFunds = 15_000_000n;

      const attCommit = pureCircuits.balanceAttestationCommitment(buyerPub, availableFunds, attSalt);
      await ledger.join(bankSk).submitAttestedFunds(attCommit);

      const buyer = ledger.join(buyerSk, terms, salt, availableFunds, attSalt);
      await buyer.depositEarnestMoney(
        escrowId,
        buyerPub,
        pureCircuits.sellerKey(sellerSk),
        pureCircuits.titleAgentKey(adminSk),
        1000n,
      );

      const stateDump = JSON.stringify(ledger.read(), (k, v) =>
        typeof v === 'bigint' ? v.toString() : v,
      );

      // Asserts sensitive liquidity numbers never leak to the public ledger
      expect(stateDump).not.toContain('12345678');
      expect(stateDump).not.toContain('15000000');
    });
  });
});
