import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,  // Ensures Render can access the app
    host: '0.0.0.0',  // Allow connections from external IPs (Render's server)
    allowedHosts: ['residential-underwriting-tool.onrender.com']  // Add Render host here
  }
})
