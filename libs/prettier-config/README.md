# Prettier Configuration

Shared Prettier configuration for the monorepo.

## Available Configs

### `nest.json`

Configuration for NestJS applications.

- Single quotes, semicolons, 100 char width
- Import sorting with `@trivago/prettier-plugin-sort-imports`
- Order: `@nestjs/`, `@app/` → external → relative

### `react.json`

Configuration for React applications.

- Single quotes, semicolons, 100 char width
- Import sorting with `@ianvs/prettier-plugin-sort-imports`
- Order: styles → react → builtin → third-party → aliases → relative

## Usage

In your `.prettierrc.cjs`:

```javascript
module.exports = require('@app/prettier-config/nest');
```

Or:

```javascript
module.exports = require('@app/prettier-config/react');
```
