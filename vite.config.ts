import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: false,
    target: 'es2015',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'App',
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        inlineDynamicImports: true
      },
    },
    chunkSizeWarningLimit: 1000,
  }
});
