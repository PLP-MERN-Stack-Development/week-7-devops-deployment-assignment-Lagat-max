module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  moduleFileExtensions: ['js', 'json', 'node'],
  testMatch: ['**/src/**/*.test.js'],
};