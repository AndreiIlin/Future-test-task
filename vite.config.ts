import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      features: '/src/features',
      entities: '/src/entities',
      shared: '/src/shared',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'app/styles/variables.scss';`,
      }
    }
  }
});
