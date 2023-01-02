import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/fp/index.ts', 'src/fp/last/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: 'ESNext',
  minify: true,
});
