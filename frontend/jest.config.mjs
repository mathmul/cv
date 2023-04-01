import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/tests/unit/**/*.spec.ts'],
  moduleNameMapper: {
    '^@/(.*)$': path.join(__dirname, 'src', '$1'),
  },
};
