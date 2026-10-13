import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

const webRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: webRoot,
  base: './',
  plugins: [wasm()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
  },
  esbuild: {
    target: 'es2022',
  },
  optimizeDeps: {
    // the onchain runtime ships as .wasm and breaks under esbuild pre-bundling
    exclude: ['@midnightntwrk/onchain-runtime-v4'],
    esbuildOptions: {
      target: 'es2022',
    },
  },
  server: {
    fs: {
      // closing room imports the managed contract from the repo root
      allow: ['..'],
    },
  },
});
