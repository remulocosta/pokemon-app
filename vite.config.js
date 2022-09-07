import react from '@vitejs/plugin-react';
import {resolve} from 'path';
import {defineConfig} from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    react()
  ],
  resolve: {
    alias: {
      'src': resolve(__dirname, './src')
    },
  }
});
