# Titleline

Earnest money escrow for high-value real estate, with proof of funds that does not expose the buyer's net worth.

## Questions this answers

**Why not just show the seller a bank statement?**
Because a statement for a $2.4M purchase usually reveals far more than "this buyer can close": total holdings, other accounts, spending history. Titleline proves one fact (available funds >= purchase price) and nothing else.

**Who vouches for the funds?**
A bank or custodian that the title company has registered as an attestor (`registerAttestor`). The attestor commits a hash of the buyer's balance (`submitAttestedFunds`). When the buyer deposits earnest money, the circuit checks the private balance against that commitment and runs `hasSufficientFunds`. A buyer cannot simply claim a number.

**What does the title company do?**
It approves the title inspection, recording an inspection certificate hash, and then closes the deal. Closing issues a deed release token and burns an escrow nullifier so the same escrow cannot settle twice.

**What if the deal falls through?**
If the closing deadline passes without settlement, `refundBuyerEarnest` returns the deposit and issues a refund token. The money is never stranded with the escrow agent.

**What ends up public?**
Escrow status, the terms commitment, the attestation commitment, inspection hash and tokens. Not the price, not the earnest amount, not the buyer's balance.

## Running it

```bash
npm install
npm test
npm run demo
npm run dev
```

The web UI includes a live panel that executes the compiled `titleline.compact` contract in the browser, including attestor registration, attested funds, deposit, inspection and closing.

## License

Apache License 2.0
