import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import {defineConfig} from 'vite';
import eslint from 'vite-plugin-eslint';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,jpg,png,svg,json}'],
        sourcemap: true
      },
      devOptions: {
        enabled: false
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        'theme_color': '#f1f9fe',
        'background_color': '#f1f9fe',
        'display': 'fullscreen',
        'orientation': 'portrait',
        'id': '/',
        'scope': '/',
        'start_url': '/index.html',
        'name': 'Pok\u00e9mon TCG App',
        'short_name': 'pokemon-app',
        'description': 'Pok\u00e9mon TCG FrontEnd Challenge',
        'icons': [
          {
            'src': '/assets/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': '/assets/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': '/assets/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': '/assets/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      'src': resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, './src/__tests__/config/jest.setup.js')],
    include: ['**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    reporters: 'verbose',
    coverage: {
      clean: true,
      reportsDirectory: resolve(__dirname, './coverage')
    }
  }
});
