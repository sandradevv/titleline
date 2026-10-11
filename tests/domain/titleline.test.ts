// SPDX-License-Identifier: Apache-2.0

import { describe, it, expect } from 'vitest';
import { TitleDomain } from '../../contract/src/domain/titleline.js';

describe('Titleline Domain Logic', () => {
  it('correctly assesses buyer sufficient funds', () => {
    expect(TitleDomain.hasSufficientFunds(500_000n, 450_000n)).toBe(true);
    expect(TitleDomain.hasSufficientFunds(450_000n, 450_000n)).toBe(true);
    expect(TitleDomain.hasSufficientFunds(449_999n, 450_000n)).toBe(false);
  });
});
