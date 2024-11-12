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
      input: 'src/main.js',
    },
  },
  manifest: true,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/fks-website/'
  : '/'
})