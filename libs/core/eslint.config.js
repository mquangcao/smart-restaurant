const nest_eslint = require('@app/eslint-config/nest');

module.exports = [
  ...nest_eslint,

  // Project-specific rule overrides
  {
    files: ['**/*.ts'],
    rules: {
      // Add your custom rules here
    },
  },
];
