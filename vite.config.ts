import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
  ],
  server: {
    allowedHosts: [
      "a61f-103-78-167-217.ngrok-free.app"
    ],
  },
})
