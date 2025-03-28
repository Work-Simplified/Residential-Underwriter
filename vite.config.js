import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,  // This ensures Render can find the port to bind to
    host: '0.0.0.0',  // This allows connections from external IPs (Render's server)
  }
})
