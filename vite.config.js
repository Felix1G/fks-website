import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: 'index.html',
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/fks-website/' : '/',
  manifest: true,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})