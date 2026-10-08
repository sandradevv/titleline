import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.20.0');

export var EscrowState;
(function (EscrowState) {
  EscrowState[EscrowState['deposited'] = 0] = 'deposited';
  EscrowState[EscrowState['title_inspected'] = 1] = 'title_inspected';
  EscrowState[EscrowState['settled'] = 2] = 'settled';
  EscrowState[EscrowState['refunded'] = 3] = 'refunded';
  EscrowState[EscrowState['disputed'] = 4] = 'disputed';
})(EscrowState || (EscrowState = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeEnum(4, 1);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

const _descriptor_3 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _EscrowPropertyRecord_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))))));
  }
  fromValue(value_0) {
    return {
      buyer: _descriptor_0.fromValue(value_0),
      seller: _descriptor_0.fromValue(value_0),
      titleEscrowAgent: _descriptor_0.fromValue(value_0),
      termsCommitment: _descriptor_0.fromValue(value_0),
      status: _descriptor_1.fromValue(value_0),
      createdAt: _descriptor_2.fromValue(value_0),
      closingDeadline: _descriptor_2.fromValue(value_0),
      minEarnestDeposit: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.buyer).concat(_descriptor_0.toValue(value_0.seller).concat(_descriptor_0.toValue(value_0.titleEscrowAgent).concat(_descriptor_0.toValue(value_0.termsCommitment).concat(_descriptor_1.toValue(value_0.status).concat(_descriptor_2.toValue(value_0.createdAt).concat(_descriptor_2.toValue(value_0.closingDeadline).concat(_descriptor_3.toValue(value_0.minEarnestDeposit))))))));
  }
}

const _descriptor_4 = new _EscrowPropertyRecord_0();

const _descriptor_5 = __compactRuntime.CompactTypeBoolean;

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

class _EscrowContractTerms_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_6.alignment()))));
  }
  fromValue(value_0) {
    return {
      earnestDeposit: _descriptor_3.fromValue(value_0),
      totalPurchasePrice: _descriptor_3.fromValue(value_0),
      closingDeadline: _descriptor_2.fromValue(value_0),
      propertyParcelId: _descriptor_2.fromValue(value_0),
      currencyCode: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.earnestDeposit).concat(_descriptor_3.toValue(value_0.totalPurchasePrice).concat(_descriptor_2.toValue(value_0.closingDeadline).concat(_descriptor_2.toValue(value_0.propertyParcelId).concat(_descriptor_6.toValue(value_0.currencyCode)))));
  }
}

const _descriptor_7 = new _EscrowContractTerms_0();

const _descriptor_8 = new __compactRuntime.CompactTypeVector(3, _descriptor_0);

class _TitleCommitmentInput_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_7.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return {
      domain: _descriptor_0.fromValue(value_0),
      terms: _descriptor_7.fromValue(value_0),
      buyer: _descriptor_0.fromValue(value_0),
      salt: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.domain).concat(_descriptor_7.toValue(value_0.terms).concat(_descriptor_0.toValue(value_0.buyer).concat(_descriptor_0.toValue(value_0.salt))));
  }
}

const _descriptor_9 = new _TitleCommitmentInput_0();

class _BalanceAttestationInput_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return {
      domain: _descriptor_0.fromValue(value_0),
      buyer: _descriptor_0.fromValue(value_0),
      availableFunds: _descriptor_3.fromValue(value_0),
      salt: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.domain).concat(_descriptor_0.toValue(value_0.buyer).concat(_descriptor_3.toValue(value_0.availableFunds).concat(_descriptor_0.toValue(value_0.salt))));
  }
}

const _descriptor_10 = new _BalanceAttestationInput_0();

const _descriptor_11 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

class _Either_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_0.fromValue(value_0),
      right: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_0.toValue(value_0.left).concat(_descriptor_0.toValue(value_0.right)));
  }
}

const _descriptor_12 = new _Either_0();

const _descriptor_13 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_14 = new _ContractAddress_0();

class _UserAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_15 = new _UserAddress_0();

class _Either_1 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_14.alignment().concat(_descriptor_15.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_14.fromValue(value_0),
      right: _descriptor_15.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_14.toValue(value_0.left).concat(_descriptor_15.toValue(value_0.right)));
  }
}

const _descriptor_16 = new _Either_1();

class _Maybe_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_16.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_5.fromValue(value_0),
      value: _descriptor_16.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_some).concat(_descriptor_16.toValue(value_0.value));
  }
}

const _descriptor_17 = new _Maybe_0();

const _descriptor_18 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.privateKey) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named privateKey');
    }
    if (typeof(witnesses_0.contractTerms) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named contractTerms');
    }
    if (typeof(witnesses_0.contractSalt) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named contractSalt');
    }
    if (typeof(witnesses_0.buyerAvailableFunds) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named buyerAvailableFunds');
    }
    if (typeof(witnesses_0.attestationSalt) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named attestationSalt');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      async buyerKey(context, ...args_1) {
        return { result: pureCircuits.buyerKey(...args_1), context };
      },
      async sellerKey(context, ...args_1) {
        return { result: pureCircuits.sellerKey(...args_1), context };
      },
      async titleAgentKey(context, ...args_1) {
        return { result: pureCircuits.titleAgentKey(...args_1), context };
      },
      async attestorKey(context, ...args_1) {
        return { result: pureCircuits.attestorKey(...args_1), context };
      },
      async titleCommitment(context, ...args_1) {
        return { result: pureCircuits.titleCommitment(...args_1), context };
      },
      async balanceAttestationCommitment(context, ...args_1) {
        return { result: pureCircuits.balanceAttestationCommitment(...args_1), context };
      },
      async escrowNullifier(context, ...args_1) {
        return { result: pureCircuits.escrowNullifier(...args_1), context };
      },
      async deedReleaseToken(context, ...args_1) {
        return { result: pureCircuits.deedReleaseToken(...args_1), context };
      },
      async refundToken(context, ...args_1) {
        return { result: pureCircuits.refundToken(...args_1), context };
      },
      async hasSufficientFunds(context, ...args_1) {
        return { result: pureCircuits.hasSufficientFunds(...args_1), context };
      },
      registerAttestor: async (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`registerAttestor: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const attestorPublic_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('registerAttestor',
                                     'argument 1 (as invoked from Typescript)',
                                     'titleline.compact line 130 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(attestorPublic_0.buffer instanceof ArrayBuffer && attestorPublic_0.BYTES_PER_ELEMENT === 1 && attestorPublic_0.length === 32)) {
          __compactRuntime.typeError('registerAttestor',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'titleline.compact line 130 char 1',
                                     'Bytes<32>',
                                     attestorPublic_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(attestorPublic_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._registerAttestor_0(context,
                                                        partialProofData,
                                                        attestorPublic_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      submitAttestedFunds: async (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`submitAttestedFunds: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const attestationCommitment_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('submitAttestedFunds',
                                     'argument 1 (as invoked from Typescript)',
                                     'titleline.compact line 136 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(attestationCommitment_0.buffer instanceof ArrayBuffer && attestationCommitment_0.BYTES_PER_ELEMENT === 1 && attestationCommitment_0.length === 32)) {
          __compactRuntime.typeError('submitAttestedFunds',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'titleline.compact line 136 char 1',
                                     'Bytes<32>',
                                     attestationCommitment_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(attestationCommitment_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._submitAttestedFunds_0(context,
                                                           partialProofData,
                                                           attestationCommitment_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      depositEarnestMoney: async (...args_1) => {
        if (args_1.length !== 6) {
          throw new __compactRuntime.CompactError(`depositEarnestMoney: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const escrowId_0 = args_1[1];
        const buyerPublic_0 = args_1[2];
        const sellerPublic_0 = args_1[3];
        const titleAgentPublic_0 = args_1[4];
        const timestamp_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('depositEarnestMoney',
                                     'argument 1 (as invoked from Typescript)',
                                     'titleline.compact line 143 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(escrowId_0.buffer instanceof ArrayBuffer && escrowId_0.BYTES_PER_ELEMENT === 1 && escrowId_0.length === 32)) {
          __compactRuntime.typeError('depositEarnestMoney',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'titleline.compact line 143 char 1',
                                     'Bytes<32>',
                                     escrowId_0)
        }
        if (!(buyerPublic_0.buffer instanceof ArrayBuffer && buyerPublic_0.BYTES_PER_ELEMENT === 1 && buyerPublic_0.length === 32)) {
          __compactRuntime.typeError('depositEarnestMoney',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'titleline.compact line 143 char 1',
                                     'Bytes<32>',
                                     buyerPublic_0)
        }
        if (!(sellerPublic_0.buffer instanceof ArrayBuffer && sellerPublic_0.BYTES_PER_ELEMENT === 1 && sellerPublic_0.length === 32)) {
          __compactRuntime.typeError('depositEarnestMoney',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'titleline.compact line 143 char 1',
                                     'Bytes<32>',
                                     sellerPublic_0)
        }
        if (!(titleAgentPublic_0.buffer instanceof ArrayBuffer && titleAgentPublic_0.BYTES_PER_ELEMENT === 1 && titleAgentPublic_0.length === 32)) {
          __compactRuntime.typeError('depositEarnestMoney',
                                     'argument 4 (argument 5 as invoked from Typescript)',
                                     'titleline.compact line 143 char 1',
                                     'Bytes<32>',
                                     titleAgentPublic_0)
        }
        if (!(typeof(timestamp_0) === 'bigint' && timestamp_0 >= 0n && timestamp_0 <= 4294967295n)) {
          __compactRuntime.typeError('depositEarnestMoney',
                                     'argument 5 (argument 6 as invoked from Typescript)',
                                     'titleline.compact line 143 char 1',
                                     'Uint<0..4294967296>',
                                     timestamp_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(escrowId_0).concat(_descriptor_0.toValue(buyerPublic_0).concat(_descriptor_0.toValue(sellerPublic_0).concat(_descriptor_0.toValue(titleAgentPublic_0).concat(_descriptor_2.toValue(timestamp_0))))),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._depositEarnestMoney_0(context,
                                                           partialProofData,
                                                           escrowId_0,
                                                           buyerPublic_0,
                                                           sellerPublic_0,
                                                           titleAgentPublic_0,
                                                           timestamp_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      approveTitleInspection: async (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`approveTitleInspection: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const escrowId_0 = args_1[1];
        const inspectionHash_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('approveTitleInspection',
                                     'argument 1 (as invoked from Typescript)',
                                     'titleline.compact line 188 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(escrowId_0.buffer instanceof ArrayBuffer && escrowId_0.BYTES_PER_ELEMENT === 1 && escrowId_0.length === 32)) {
          __compactRuntime.typeError('approveTitleInspection',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'titleline.compact line 188 char 1',
                                     'Bytes<32>',
                                     escrowId_0)
        }
        if (!(inspectionHash_0.buffer instanceof ArrayBuffer && inspectionHash_0.BYTES_PER_ELEMENT === 1 && inspectionHash_0.length === 32)) {
          __compactRuntime.typeError('approveTitleInspection',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'titleline.compact line 188 char 1',
                                     'Bytes<32>',
                                     inspectionHash_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(escrowId_0).concat(_descriptor_0.toValue(inspectionHash_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._approveTitleInspection_0(context,
                                                              partialProofData,
                                                              escrowId_0,
                                                              inspectionHash_0);
        partialProofData.output = { value: [], alignment: [] };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      closeAndSettleDeal: async (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`closeAndSettleDeal: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const escrowId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('closeAndSettleDeal',
                                     'argument 1 (as invoked from Typescript)',
                                     'titleline.compact line 213 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(escrowId_0.buffer instanceof ArrayBuffer && escrowId_0.BYTES_PER_ELEMENT === 1 && escrowId_0.length === 32)) {
          __compactRuntime.typeError('closeAndSettleDeal',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'titleline.compact line 213 char 1',
                                     'Bytes<32>',
                                     escrowId_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(escrowId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._closeAndSettleDeal_0(context,
                                                          partialProofData,
                                                          escrowId_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      },
      refundBuyerEarnest: async (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`refundBuyerEarnest: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const escrowId_0 = args_1[1];
        const currentTimestamp_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.callContext.currentQueryContext != undefined)) {
          __compactRuntime.typeError('refundBuyerEarnest',
                                     'argument 1 (as invoked from Typescript)',
                                     'titleline.compact line 252 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(escrowId_0.buffer instanceof ArrayBuffer && escrowId_0.BYTES_PER_ELEMENT === 1 && escrowId_0.length === 32)) {
          __compactRuntime.typeError('refundBuyerEarnest',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'titleline.compact line 252 char 1',
                                     'Bytes<32>',
                                     escrowId_0)
        }
        if (!(typeof(currentTimestamp_0) === 'bigint' && currentTimestamp_0 >= 0n && currentTimestamp_0 <= 4294967295n)) {
          __compactRuntime.typeError('refundBuyerEarnest',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'titleline.compact line 252 char 1',
                                     'Uint<0..4294967296>',
                                     currentTimestamp_0)
        }
        const context = __compactRuntime.copyCircuitContext(contextOrig_0);
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(escrowId_0).concat(_descriptor_2.toValue(currentTimestamp_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_2.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = await this._refundBuyerEarnest_0(context,
                                                          partialProofData,
                                                          escrowId_0,
                                                          currentTimestamp_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        __compactRuntime.finalizeCallProofData(context, partialProofData);
        return { result: result_0, context: context, gasCost: context.callContext.currentGasCost };
      }
    };
    this.impureCircuits = {
      registerAttestor: this.circuits.registerAttestor,
      submitAttestedFunds: this.circuits.submitAttestedFunds,
      depositEarnestMoney: this.circuits.depositEarnestMoney,
      approveTitleInspection: this.circuits.approveTitleInspection,
      closeAndSettleDeal: this.circuits.closeAndSettleDeal,
      refundBuyerEarnest: this.circuits.refundBuyerEarnest
    };
    this.provableCircuits = {
      registerAttestor: this.circuits.registerAttestor,
      submitAttestedFunds: this.circuits.submitAttestedFunds,
      depositEarnestMoney: this.circuits.depositEarnestMoney,
      approveTitleInspection: this.circuits.approveTitleInspection,
      closeAndSettleDeal: this.circuits.closeAndSettleDeal,
      refundBuyerEarnest: this.circuits.refundBuyerEarnest
    };
  }
  async initialState(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('registerAttestor', new __compactRuntime.ContractOperation());
    state_0.setOperation('submitAttestedFunds', new __compactRuntime.ContractOperation());
    state_0.setOperation('depositEarnestMoney', new __compactRuntime.ContractOperation());
    state_0.setOperation('approveTitleInspection', new __compactRuntime.ContractOperation());
    state_0.setOperation('closeAndSettleDeal', new __compactRuntime.ContractOperation());
    state_0.setOperation('refundBuyerEarnest', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext({circuitId: 'constructor', contractAddress: __compactRuntime.dummyContractAddress(), coinPublicKeyOrZswapState: constructorContext_0.initialZswapLocalState.coinPublicKey, contractState: state_0.data, privateState: constructorContext_0.initialPrivateState});
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(0n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(1n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(2n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(3n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(4n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                              alignment: _descriptor_3.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(5n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(6n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this._titleAgentKey_0(this._privateKey_0(context,
                                                           partialProofData));
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_18.toValue(0n),
                                                                                              alignment: _descriptor_18.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.callContext.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.callContext.currentPrivateState,
      currentZswapLocalState: context.callContext.currentZswapLocalState
    }
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_11, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_9, value_0);
    return result_0;
  }
  _persistentHash_2(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_10, value_0);
    return result_0;
  }
  _persistentHash_3(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_8, value_0);
    return result_0;
  }
  _privateKey_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.privateKey(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('privateKey',
                                 'return value',
                                 'titleline.compact line 60 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _contractTerms_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.contractTerms(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && typeof(result_0.earnestDeposit) === 'bigint' && result_0.earnestDeposit >= 0n && result_0.earnestDeposit <= 18446744073709551615n && typeof(result_0.totalPurchasePrice) === 'bigint' && result_0.totalPurchasePrice >= 0n && result_0.totalPurchasePrice <= 18446744073709551615n && typeof(result_0.closingDeadline) === 'bigint' && result_0.closingDeadline >= 0n && result_0.closingDeadline <= 4294967295n && typeof(result_0.propertyParcelId) === 'bigint' && result_0.propertyParcelId >= 0n && result_0.propertyParcelId <= 4294967295n && typeof(result_0.currencyCode) === 'bigint' && result_0.currencyCode >= 0n && result_0.currencyCode <= 65535n)) {
      __compactRuntime.typeError('contractTerms',
                                 'return value',
                                 'titleline.compact line 61 char 1',
                                 'struct EscrowContractTerms<earnestDeposit: Uint<0..18446744073709551616>, totalPurchasePrice: Uint<0..18446744073709551616>, closingDeadline: Uint<0..4294967296>, propertyParcelId: Uint<0..4294967296>, currencyCode: Uint<0..65536>>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_7.toValue(result_0),
      alignment: _descriptor_7.alignment()
    });
    return result_0;
  }
  _contractSalt_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.contractSalt(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('contractSalt',
                                 'return value',
                                 'titleline.compact line 62 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _buyerAvailableFunds_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.buyerAvailableFunds(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0n && result_0 <= 18446744073709551615n)) {
      __compactRuntime.typeError('buyerAvailableFunds',
                                 'return value',
                                 'titleline.compact line 63 char 1',
                                 'Uint<0..18446744073709551616>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_3.toValue(result_0),
      alignment: _descriptor_3.alignment()
    });
    return result_0;
  }
  _attestationSalt_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.callContext.currentQueryContext.state), context.callContext.currentPrivateState, context.callContext.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.attestationSalt(witnessContext_0);
    context.callContext.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('attestationSalt',
                                 'return value',
                                 'titleline.compact line 64 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _buyerKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 98, 117, 121, 101, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _sellerKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 115, 101, 108, 108, 101, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _titleAgentKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 116, 105, 116, 108, 101, 97, 103, 101, 110, 116, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _attestorKey_0(sk_0) {
    return this._persistentHash_0([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 97, 116, 116, 101, 115, 116, 111, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _titleCommitment_0(terms_0, buyer_0, salt_0) {
    return this._persistentHash_1({ domain:
                                      new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 99, 111, 110, 116, 114, 97, 99, 116, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    terms: terms_0,
                                    buyer: buyer_0,
                                    salt: salt_0 });
  }
  _balanceAttestationCommitment_0(buyer_0, availableFunds_0, salt_0) {
    return this._persistentHash_2({ domain:
                                      new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 97, 116, 116, 101, 115, 116, 97, 116, 105, 111, 110, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    buyer: buyer_0,
                                    availableFunds: availableFunds_0,
                                    salt: salt_0 });
  }
  _escrowNullifier_0(salt_0, escrowId_0) {
    return this._persistentHash_3([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 110, 117, 108, 108, 105, 102, 105, 101, 114, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   escrowId_0,
                                   salt_0]);
  }
  _deedReleaseToken_0(commitment_0, recipient_0) {
    return this._persistentHash_3([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 100, 101, 101, 100, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   commitment_0,
                                   recipient_0]);
  }
  _refundToken_0(commitment_0, buyer_0) {
    return this._persistentHash_3([new Uint8Array([116, 105, 116, 108, 101, 108, 105, 110, 101, 58, 114, 101, 102, 117, 110, 100, 58, 118, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   commitment_0,
                                   buyer_0]);
  }
  _hasSufficientFunds_0(available_0, required_0) {
    return available_0 >= required_0;
  }
  async _registerAttestor_0(context, partialProofData, attestorPublic_0) {
    __compactRuntime.assert(this._equal_0(this._titleAgentKey_0(this._privateKey_0(context,
                                                                                   partialProofData)),
                                          _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                    partialProofData,
                                                                                                    [
                                                                                                     { dup: { n: 0 } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_18.toValue(0n),
                                                                                                                                alignment: _descriptor_18.alignment() } }] } },
                                                                                                     { popeq: { cached: false,
                                                                                                                result: undefined } }]).value)),
                            'Only title admin can register attestors');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(1n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(attestorPublic_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(true),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _submitAttestedFunds_0(context,
                               partialProofData,
                               attestationCommitment_0)
  {
    const pKey_0 = this._privateKey_0(context, partialProofData);
    const caller_0 = this._attestorKey_0(pKey_0);
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_18.toValue(1n),
                                                                                                                  alignment: _descriptor_18.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(caller_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Only certified financial institution can attest funds');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(2n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(attestationCommitment_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(true),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _depositEarnestMoney_0(context,
                               partialProofData,
                               escrowId_0,
                               buyerPublic_0,
                               sellerPublic_0,
                               titleAgentPublic_0,
                               timestamp_0)
  {
    const id_0 = escrowId_0;
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_18.toValue(3n),
                                                                                                                   alignment: _descriptor_18.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Escrow already exists for this parcel');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_1(this._buyerKey_0(pKey_0),
                                          buyerPublic_0),
                            'Invalid buyer identity');
    const terms_0 = this._contractTerms_0(context, partialProofData);
    const salt_0 = this._contractSalt_0(context, partialProofData);
    const available_0 = this._buyerAvailableFunds_0(context, partialProofData);
    const aSalt_0 = this._attestationSalt_0(context, partialProofData);
    const computedAttestation_0 = this._balanceAttestationCommitment_0(buyerPublic_0,
                                                                       available_0,
                                                                       aSalt_0);
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_18.toValue(2n),
                                                                                                                  alignment: _descriptor_18.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(computedAttestation_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'No certified bank attestation found for buyer funds');
    let t_0;
    __compactRuntime.assert((t_0 = terms_0.earnestDeposit, t_0 > 0n),
                            'Earnest deposit must be positive');
    let t_1;
    __compactRuntime.assert((t_1 = terms_0.closingDeadline, t_1 > timestamp_0),
                            'Closing deadline must be in future');
    __compactRuntime.assert(this._hasSufficientFunds_0(available_0,
                                                       terms_0.totalPurchasePrice),
                            'Proof-of-funds verification failed: available funds below purchase price');
    const commitment_0 = this._titleCommitment_0(terms_0, buyerPublic_0, salt_0);
    const record_0 = { buyer: buyerPublic_0,
                       seller: sellerPublic_0,
                       titleEscrowAgent: titleAgentPublic_0,
                       termsCommitment: commitment_0,
                       status: 0,
                       createdAt: timestamp_0,
                       closingDeadline: terms_0.closingDeadline,
                       minEarnestDeposit: terms_0.earnestDeposit };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(3n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(record_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(4n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_0),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _approveTitleInspection_0(context,
                                  partialProofData,
                                  escrowId_0,
                                  inspectionHash_0)
  {
    const id_0 = escrowId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_18.toValue(3n),
                                                                                                                  alignment: _descriptor_18.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Escrow not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_18.toValue(3n),
                                                                                                           alignment: _descriptor_18.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 0,
                            'Escrow not in deposited state');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_2(this._titleAgentKey_0(pKey_0),
                                          record_0.titleEscrowAgent),
                            'Only certified title escrow agent can approve inspection');
    const updated_0 = { buyer: record_0.buyer,
                        seller: record_0.seller,
                        titleEscrowAgent: record_0.titleEscrowAgent,
                        termsCommitment: record_0.termsCommitment,
                        status: 1,
                        createdAt: record_0.createdAt,
                        closingDeadline: record_0.closingDeadline,
                        minEarnestDeposit: record_0.minEarnestDeposit };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(3n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(6n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(inspectionHash_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  async _closeAndSettleDeal_0(context, partialProofData, escrowId_0) {
    const id_0 = escrowId_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_18.toValue(3n),
                                                                                                                  alignment: _descriptor_18.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Escrow not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_18.toValue(3n),
                                                                                                           alignment: _descriptor_18.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 1,
                            'Title not inspected and approved');
    const terms_0 = this._contractTerms_0(context, partialProofData);
    const salt_0 = this._contractSalt_0(context, partialProofData);
    const computed_0 = this._titleCommitment_0(terms_0, record_0.buyer, salt_0);
    __compactRuntime.assert(this._equal_3(computed_0, record_0.termsCommitment),
                            'Commitment terms mismatch');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    const aKey_0 = this._titleAgentKey_0(pKey_0);
    const sKey_0 = this._sellerKey_0(pKey_0);
    __compactRuntime.assert(this._equal_4(aKey_0, record_0.titleEscrowAgent)
                            ||
                            this._equal_5(sKey_0, record_0.seller),
                            'Not authorized to close deal');
    const nullifier_0 = this._escrowNullifier_0(salt_0, id_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_18.toValue(5n),
                                                                                                                   alignment: _descriptor_18.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Escrow already settled or refunded');
    const token_0 = this._deedReleaseToken_0(record_0.termsCommitment,
                                             record_0.seller);
    const updated_0 = { buyer: record_0.buyer,
                        seller: record_0.seller,
                        titleEscrowAgent: record_0.titleEscrowAgent,
                        termsCommitment: record_0.termsCommitment,
                        status: 2,
                        createdAt: record_0.createdAt,
                        closingDeadline: record_0.closingDeadline,
                        minEarnestDeposit: record_0.minEarnestDeposit };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(3n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(5n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(true),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return token_0;
  }
  async _refundBuyerEarnest_0(context,
                              partialProofData,
                              escrowId_0,
                              currentTimestamp_0)
  {
    const id_0 = escrowId_0;
    const curTime_0 = currentTimestamp_0;
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_18.toValue(3n),
                                                                                                                  alignment: _descriptor_18.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Escrow not found');
    const record_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_18.toValue(3n),
                                                                                                           alignment: _descriptor_18.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value);
    __compactRuntime.assert(record_0.status === 0,
                            'Escrow not in refundable deposited state');
    __compactRuntime.assert(curTime_0 > record_0.closingDeadline,
                            'Closing deadline has not yet passed');
    const terms_0 = this._contractTerms_0(context, partialProofData);
    const salt_0 = this._contractSalt_0(context, partialProofData);
    const computed_0 = this._titleCommitment_0(terms_0, record_0.buyer, salt_0);
    __compactRuntime.assert(this._equal_6(computed_0, record_0.termsCommitment),
                            'Commitment terms mismatch');
    const pKey_0 = this._privateKey_0(context, partialProofData);
    __compactRuntime.assert(this._equal_7(this._buyerKey_0(pKey_0),
                                          record_0.buyer),
                            'Only buyer can claim earnest refund');
    const nullifier_0 = this._escrowNullifier_0(salt_0, id_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_18.toValue(5n),
                                                                                                                   alignment: _descriptor_18.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Escrow already settled or refunded');
    const token_0 = this._refundToken_0(record_0.termsCommitment, record_0.buyer);
    const updated_0 = { buyer: record_0.buyer,
                        seller: record_0.seller,
                        titleEscrowAgent: record_0.titleEscrowAgent,
                        termsCommitment: record_0.termsCommitment,
                        status: 3,
                        createdAt: record_0.createdAt,
                        closingDeadline: record_0.closingDeadline,
                        minEarnestDeposit: record_0.minEarnestDeposit };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(3n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(id_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(updated_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_18.toValue(5n),
                                                                  alignment: _descriptor_18.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(true),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return token_0;
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_4(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_6(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_7(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    callContext: { currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()), currentGasCost: __compactRuntime.emptyRunningCost() },
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get titleRegistryAdmin() {
      return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_18.toValue(0n),
                                                                                                   alignment: _descriptor_18.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    certifiedAttestors: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(1n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                                                                 alignment: _descriptor_3.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(1n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'titleline.compact line 49 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(1n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'titleline.compact line 49 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(1n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    attestedFundsRegistry: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(2n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                                                                 alignment: _descriptor_3.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(2n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'titleline.compact line 50 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(2n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'titleline.compact line 50 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(2n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    properties: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(3n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                                                                 alignment: _descriptor_3.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(3n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'titleline.compact line 51 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(3n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'titleline.compact line 51 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(3n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_4.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get propertyCount() {
      return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_18.toValue(4n),
                                                                                                   alignment: _descriptor_18.alignment() } }] } },
                                                                        { popeq: { cached: true,
                                                                                   result: undefined } }]).value);
    },
    settlementNullifiers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(5n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                                                                 alignment: _descriptor_3.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(5n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'titleline.compact line 53 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(5n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'titleline.compact line 53 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(5n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    titleInspectionProofs: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(6n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                                                                 alignment: _descriptor_3.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(6n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'titleline.compact line 54 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(6n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'titleline.compact line 54 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_18.toValue(6n),
                                                                                                     alignment: _descriptor_18.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[6];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_0.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  callContext: { currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress()), currentGasCost: __compactRuntime.emptyRunningCost() }
};
const _dummyContract = new Contract({
  privateKey: (...args) => undefined,
  contractTerms: (...args) => undefined,
  contractSalt: (...args) => undefined,
  buyerAvailableFunds: (...args) => undefined,
  attestationSalt: (...args) => undefined
});
export const pureCircuits = {
  buyerKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`buyerKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('buyerKey',
                                 'argument 1',
                                 'titleline.compact line 70 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._buyerKey_0(sk_0);
  },
  sellerKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`sellerKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('sellerKey',
                                 'argument 1',
                                 'titleline.compact line 74 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._sellerKey_0(sk_0);
  },
  titleAgentKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`titleAgentKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('titleAgentKey',
                                 'argument 1',
                                 'titleline.compact line 78 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._titleAgentKey_0(sk_0);
  },
  attestorKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`attestorKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.typeError('attestorKey',
                                 'argument 1',
                                 'titleline.compact line 82 char 1',
                                 'Bytes<32>',
                                 sk_0)
    }
    return _dummyContract._attestorKey_0(sk_0);
  },
  titleCommitment: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`titleCommitment: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const terms_0 = args_0[0];
    const buyer_0 = args_0[1];
    const salt_0 = args_0[2];
    if (!(typeof(terms_0) === 'object' && typeof(terms_0.earnestDeposit) === 'bigint' && terms_0.earnestDeposit >= 0n && terms_0.earnestDeposit <= 18446744073709551615n && typeof(terms_0.totalPurchasePrice) === 'bigint' && terms_0.totalPurchasePrice >= 0n && terms_0.totalPurchasePrice <= 18446744073709551615n && typeof(terms_0.closingDeadline) === 'bigint' && terms_0.closingDeadline >= 0n && terms_0.closingDeadline <= 4294967295n && typeof(terms_0.propertyParcelId) === 'bigint' && terms_0.propertyParcelId >= 0n && terms_0.propertyParcelId <= 4294967295n && typeof(terms_0.currencyCode) === 'bigint' && terms_0.currencyCode >= 0n && terms_0.currencyCode <= 65535n)) {
      __compactRuntime.typeError('titleCommitment',
                                 'argument 1',
                                 'titleline.compact line 86 char 1',
                                 'struct EscrowContractTerms<earnestDeposit: Uint<0..18446744073709551616>, totalPurchasePrice: Uint<0..18446744073709551616>, closingDeadline: Uint<0..4294967296>, propertyParcelId: Uint<0..4294967296>, currencyCode: Uint<0..65536>>',
                                 terms_0)
    }
    if (!(buyer_0.buffer instanceof ArrayBuffer && buyer_0.BYTES_PER_ELEMENT === 1 && buyer_0.length === 32)) {
      __compactRuntime.typeError('titleCommitment',
                                 'argument 2',
                                 'titleline.compact line 86 char 1',
                                 'Bytes<32>',
                                 buyer_0)
    }
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.typeError('titleCommitment',
                                 'argument 3',
                                 'titleline.compact line 86 char 1',
                                 'Bytes<32>',
                                 salt_0)
    }
    return _dummyContract._titleCommitment_0(terms_0, buyer_0, salt_0);
  },
  balanceAttestationCommitment: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`balanceAttestationCommitment: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const buyer_0 = args_0[0];
    const availableFunds_0 = args_0[1];
    const salt_0 = args_0[2];
    if (!(buyer_0.buffer instanceof ArrayBuffer && buyer_0.BYTES_PER_ELEMENT === 1 && buyer_0.length === 32)) {
      __compactRuntime.typeError('balanceAttestationCommitment',
                                 'argument 1',
                                 'titleline.compact line 95 char 1',
                                 'Bytes<32>',
                                 buyer_0)
    }
    if (!(typeof(availableFunds_0) === 'bigint' && availableFunds_0 >= 0n && availableFunds_0 <= 18446744073709551615n)) {
      __compactRuntime.typeError('balanceAttestationCommitment',
                                 'argument 2',
                                 'titleline.compact line 95 char 1',
                                 'Uint<0..18446744073709551616>',
                                 availableFunds_0)
    }
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.typeError('balanceAttestationCommitment',
                                 'argument 3',
                                 'titleline.compact line 95 char 1',
                                 'Bytes<32>',
                                 salt_0)
    }
    return _dummyContract._balanceAttestationCommitment_0(buyer_0,
                                                          availableFunds_0,
                                                          salt_0);
  },
  escrowNullifier: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`escrowNullifier: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const salt_0 = args_0[0];
    const escrowId_0 = args_0[1];
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.typeError('escrowNullifier',
                                 'argument 1',
                                 'titleline.compact line 104 char 1',
                                 'Bytes<32>',
                                 salt_0)
    }
    if (!(escrowId_0.buffer instanceof ArrayBuffer && escrowId_0.BYTES_PER_ELEMENT === 1 && escrowId_0.length === 32)) {
      __compactRuntime.typeError('escrowNullifier',
                                 'argument 2',
                                 'titleline.compact line 104 char 1',
                                 'Bytes<32>',
                                 escrowId_0)
    }
    return _dummyContract._escrowNullifier_0(salt_0, escrowId_0);
  },
  deedReleaseToken: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`deedReleaseToken: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const commitment_0 = args_0[0];
    const recipient_0 = args_0[1];
    if (!(commitment_0.buffer instanceof ArrayBuffer && commitment_0.BYTES_PER_ELEMENT === 1 && commitment_0.length === 32)) {
      __compactRuntime.typeError('deedReleaseToken',
                                 'argument 1',
                                 'titleline.compact line 108 char 1',
                                 'Bytes<32>',
                                 commitment_0)
    }
    if (!(recipient_0.buffer instanceof ArrayBuffer && recipient_0.BYTES_PER_ELEMENT === 1 && recipient_0.length === 32)) {
      __compactRuntime.typeError('deedReleaseToken',
                                 'argument 2',
                                 'titleline.compact line 108 char 1',
                                 'Bytes<32>',
                                 recipient_0)
    }
    return _dummyContract._deedReleaseToken_0(commitment_0, recipient_0);
  },
  refundToken: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`refundToken: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const commitment_0 = args_0[0];
    const buyer_0 = args_0[1];
    if (!(commitment_0.buffer instanceof ArrayBuffer && commitment_0.BYTES_PER_ELEMENT === 1 && commitment_0.length === 32)) {
      __compactRuntime.typeError('refundToken',
                                 'argument 1',
                                 'titleline.compact line 112 char 1',
                                 'Bytes<32>',
                                 commitment_0)
    }
    if (!(buyer_0.buffer instanceof ArrayBuffer && buyer_0.BYTES_PER_ELEMENT === 1 && buyer_0.length === 32)) {
      __compactRuntime.typeError('refundToken',
                                 'argument 2',
                                 'titleline.compact line 112 char 1',
                                 'Bytes<32>',
                                 buyer_0)
    }
    return _dummyContract._refundToken_0(commitment_0, buyer_0);
  },
  hasSufficientFunds: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`hasSufficientFunds: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const available_0 = args_0[0];
    const required_0 = args_0[1];
    if (!(typeof(available_0) === 'bigint' && available_0 >= 0n && available_0 <= 18446744073709551615n)) {
      __compactRuntime.typeError('hasSufficientFunds',
                                 'argument 1',
                                 'titleline.compact line 117 char 1',
                                 'Uint<0..18446744073709551616>',
                                 available_0)
    }
    if (!(typeof(required_0) === 'bigint' && required_0 >= 0n && required_0 <= 18446744073709551615n)) {
      __compactRuntime.typeError('hasSufficientFunds',
                                 'argument 2',
                                 'titleline.compact line 117 char 1',
                                 'Uint<0..18446744073709551616>',
                                 required_0)
    }
    return _dummyContract._hasSufficientFunds_0(available_0, required_0);
  }
};
export const expectedVk = {};

export const circuitSignatures = {
  'buyerKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'sellerKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'titleAgentKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'attestorKey': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'titleCommitment': {pure: true, provable: false, argumentTypes: [{tag: 'Struct', name: 'EscrowContractTerms', elements: [{name: 'earnestDeposit', type: {tag: 'Uint', maxval: '18446744073709551615'}}, {name: 'totalPurchasePrice', type: {tag: 'Uint', maxval: '18446744073709551615'}}, {name: 'closingDeadline', type: {tag: 'Uint', maxval: '4294967295'}}, {name: 'propertyParcelId', type: {tag: 'Uint', maxval: '4294967295'}}, {name: 'currencyCode', type: {tag: 'Uint', maxval: '65535'}}]}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'balanceAttestationCommitment': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Uint', maxval: '18446744073709551615'}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'escrowNullifier': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'deedReleaseToken': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'refundToken': {pure: true, provable: false, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'hasSufficientFunds': {pure: true, provable: false, argumentTypes: [{tag: 'Uint', maxval: '18446744073709551615'}, {tag: 'Uint', maxval: '18446744073709551615'}], resultType: {tag: 'Boolean'}},
  'registerAttestor': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'submitAttestedFunds': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'depositEarnestMoney': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}, {tag: 'Uint', maxval: '4294967295'}], resultType: {tag: 'Tuple', types: []}},
  'approveTitleInspection': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Bytes', length: 32}], resultType: {tag: 'Tuple', types: []}},
  'closeAndSettleDeal': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}], resultType: {tag: 'Bytes', length: 32}},
  'refundBuyerEarnest': {pure: false, provable: true, argumentTypes: [{tag: 'Bytes', length: 32}, {tag: 'Uint', maxval: '4294967295'}], resultType: {tag: 'Bytes', length: 32}},
};

export const declaredInterfaces = {};

//# sourceMappingURL=index.js.map
