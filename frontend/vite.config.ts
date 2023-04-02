import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Checker from 'vite-plugin-checker';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

let base = '/';
console.log({ env: process.env });
if (process.env.NODE_ENV === 'production') {
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
