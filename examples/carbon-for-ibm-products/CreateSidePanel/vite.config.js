import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     'react/jsx-runtime': 'react/jsx-runtime.js',
  //   },
  // },
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
  ],
});
