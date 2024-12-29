import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Replace <repository-name> with your GitHub repository name
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build', // Output to 'build' directory
  },
});
