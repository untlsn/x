import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import * as path from 'path';

const fromRoot = (src: string) => path.join(__dirname, src);

export default defineConfig({
  resolve: {
    alias: {
      x: fromRoot('./src'),
    },
  },
  plugins: [
    AutoImport({
      imports: [
        'vitest',
        { src: ['x'] },
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],
});
