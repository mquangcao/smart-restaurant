# TypeScript Configuration

Shared TypeScript configuration for the monorepo.

## Available Configs

### `base.json`

Base configuration with common settings for all TypeScript projects.

- Target: ES2023
- Module: CommonJS
- Includes Node types

### `nestjs.json`

Configuration for NestJS applications.

- Extends `base.json`
- Enables decorators
- Optimized for NestJS with declaration generation

### `react.json`

Configuration for React applications with Vite.

- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Strict mode enabled

### `nest-library.json`

Configuration for shared library packages.

- Extends `nest.json`
- Enables composite projects
- Generates declarations and source maps

## Usage

In your `tsconfig.json`:

```json
{
  "extends": "@app/typescript-config/nestjs.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

Or with relative path:

```json
{
  "extends": "../../libs/typescript-config/nestjs.json"
}
```
