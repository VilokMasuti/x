import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://x-rocv.vercel.app/',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['framer-motion'],
    },
  },
});
