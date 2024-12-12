import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    svgr({
      svgrOptions: {
        icon: true
      },
      esbuildOptions: { loader: 'tsx' }
    }),
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
