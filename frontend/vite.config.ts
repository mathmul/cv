import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Checker from 'vite-plugin-checker';
import path from 'path';

let base = '/';
if (process.env.NODE_ENV === 'production') {
  console.log({ env: process.env });
  base += process.env.SERVER_PATH || '';
}
export default defineConfig({
  plugins: [
    vue(),
    Checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base,
});
