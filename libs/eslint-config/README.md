# ESLint Configuration

Shared ESLint configuration for the monorepo.

## Available Configs

### `nest.js`

Configuration for NestJS applications.

- TypeScript recommended rules
- Prettier integration
- Jest support for test files
- Node.js environment
- Unused `_` prefixed variables ignored

### `react.js`

Configuration for React applications.

- TypeScript recommended rules
- React Hooks rules
- React Refresh for Vite HMR
- Browser environment
- Unused `_` prefixed variables ignored

## Usage

In your `eslint.config.js`:

```javascript
const nest_eslint = require('@app/eslint-config/nest');

module.exports = [
  ...nest_eslint,
  // Your custom rules here
];
```

Or:

```javascript
const react_eslint = require('@app/eslint-config/react');

module.exports = [
  ...react_eslint,
  // Your custom rules here
];
```
