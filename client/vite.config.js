import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = 5000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/dojo': `http://localhost:${port}`
      },
    }
  }

)

