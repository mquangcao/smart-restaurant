/**
 * @type {import('eslint').Linter.Config[]}
 */
/* eslint-disable @typescript-eslint/no-require-imports, no-undef */
/* eslint-env node */
const react_eslint = require('@app/eslint-config/react');

module.exports = [
  ...react_eslint,

  // Project-specific rule overrides
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Add your custom rules here
      // Example: '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
