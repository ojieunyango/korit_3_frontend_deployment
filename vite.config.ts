// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/korit_3_frontend_deployment/',
  plugins: [react()],
});

