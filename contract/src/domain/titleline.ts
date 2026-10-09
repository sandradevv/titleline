// SPDX-License-Identifier: Apache-2.0

export class TitleDomain {
  static hasSufficientFunds(available: bigint, required: bigint): boolean {
    return available >= required;
  }
}
