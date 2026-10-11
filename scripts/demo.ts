// SPDX-License-Identifier: Apache-2.0

import {
  EscrowState,
  pureCircuits,
  type EscrowContractTerms,
} from '../contract/src/managed/titleline/contract/index.js';
import { ClosingTable } from '../contract/src/simulator.js';

function randomBytes(length: number = 32): Uint8Array {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function runDemo() {
  console.log('------------------------------------------------------------');
  console.log('TITLELINE: High-Value Real Estate Earnest Escrow on Midnight');
  console.log('Zero liquidity disclosure, verifiable proof-of-funds & closing.');
  console.log('------------------------------------------------------------\n');

  const titleAgentSecret = randomBytes(32);
  const ledger = await ClosingTable.deploy(titleAgentSecret);
  console.log('[1/4] Contract deployed by Certified Title Escrow Company:', toHex(ledger.read().titleRegistryAdmin));

  const buyerSecret = randomBytes(32);
  const sellerSecret = randomBytes(32);
  const buyerPub = pureCircuits.buyerKey(buyerSecret);
  const sellerPub = pureCircuits.sellerKey(sellerSecret);
  const titleAgentPub = pureCircuits.titleAgentKey(titleAgentSecret);

  // Property terms: 2.4M USD purchase price, 150K USD earnest deposit
  const escrowId = randomBytes(32);
  const terms: EscrowContractTerms = {
    earnestDeposit: 150_000n,
    totalPurchasePrice: 2_400_000n,
    closingDeadline: 30_000n,
    propertyParcelId: 44109n,
    currencyCode: 1n,
  };
  const salt = randomBytes(32);
  const attSalt = randomBytes(32);
  const availableFunds = 3_100_000n; // Buyer holds 3.1M USD (sufficient >= 2.4M)

  // Title admin authorizes Tier-1 Escrow Bank as certified attestor
  const bankSecret = randomBytes(32);
  const bankPub = pureCircuits.attestorKey(bankSecret);
  const titleAdmin = ledger.join(titleAgentSecret);
  await titleAdmin.registerAttestor(bankPub);

  // Bank commits certified proof-of-funds attestation on ledger
  const attCommit = pureCircuits.balanceAttestationCommitment(buyerPub, availableFunds, attSalt);
  const bank = ledger.join(bankSecret);
  await bank.submitAttestedFunds(attCommit);

  const commitment = pureCircuits.titleCommitment(terms, buyerPub, salt);

  const buyer = ledger.join(buyerSecret, terms, salt, availableFunds, attSalt);
  await buyer.depositEarnestMoney(escrowId, buyerPub, sellerPub, titleAgentPub, 1000n);
  console.log('[2/4] Buyer deposited earnest money with ZK Proof of Funds:');
  console.log('      * Escrow Parcel ID: ', terms.propertyParcelId.toString());
  console.log('      * Terms Commitment: ', toHex(commitment));
  console.log('      * Bank Attestation: Certified on-chain commitment verified in ZK');
  console.log('      * Buyer Total Funds: [VERIFIED >= $2,400,000 IN ZK, EXACT SUM HIDDEN]');

  // Title company performs lien search & deeds inspection
  const titleAgent = ledger.join(titleAgentSecret, terms, salt);
  const titleReportHash = randomBytes(32);
  await titleAgent.approveTitleInspection(escrowId, titleReportHash);
  console.log('\n[3/4] Title company certified property deed & inspection. Status: TITLE_INSPECTED');
  console.log('      * Title Inspection Certificate Hash:', toHex(titleReportHash));

  // Closing and deed settlement
  const deedToken = await titleAgent.closeAndSettleDeal(escrowId);
  console.log('\n[4/4] Deal closed and settled:');
  console.log('      * Deed Release Token Issued:', toHex(deedToken));

  const status = ledger.read().properties.lookup(escrowId).status;
  console.log('      * Final Escrow Property Status:', EscrowState[status]);
  console.log('\nReal estate title settlement completed with zero personal wealth disclosure.');
  console.log('------------------------------------------------------------');
}

runDemo().catch((err) => {
  console.error('Titleline demo failed:', err);
  process.exit(1);
});
