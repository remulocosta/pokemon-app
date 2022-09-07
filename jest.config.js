module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
        '<rootDir>/src/__tests__/__mocks__/fileMock.js'
  },
  testEnvironment: 'jest-environment-jsdom',
};
