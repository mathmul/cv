export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['**/tests/unit/**/*.spec.ts'],
};
