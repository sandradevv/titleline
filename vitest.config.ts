import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/contract/**/*.test.ts', 'tests/domain/**/*.test.ts'],
    fileParallelism: false,
    testTimeout: 30_000,
  },
});
