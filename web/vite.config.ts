import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['atene-landing-page.phthanh.pro'],
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['atene-landing-page.phthanh.pro'],
  },
})
