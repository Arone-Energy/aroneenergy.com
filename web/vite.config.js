import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 5174 so it can run next to the aronetech.com landing app (5173).
  server: { port: 5174 },
  preview: { port: 4174 },
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
})
