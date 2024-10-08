import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // The backend server
        changeOrigin: true   // Use this if you're dealing with HTTPS and self-signed certificates
      },
    },
  },
});
