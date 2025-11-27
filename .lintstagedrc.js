module.exports = {
  'apps/api/**/*': () => [
    'npm run format:fix --workspace=apps/api',
    'npm run lint:fix --workspace=apps/api',
  ],
  'apps/web/**/*': () => [
    'npm run format:fix --workspace=apps/web',
    'npm run lint:fix --workspace=apps/web',
  ],
  'libs/core/**/*': () => [
    'npm run format:fix --workspace=libs/core',
    'npm run lint:fix --workspace=libs/core',
  ],
  'libs/common/**/*': () => [
    'npm run format:fix --workspace=libs/common',
    'npm run lint:fix --workspace=libs/common',
  ],
};
