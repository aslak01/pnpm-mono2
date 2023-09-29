const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/sveltekit/**/*.ts',
      'libs/sveltekit/**/*.tsx',
      'libs/sveltekit/**/*.js',
      'libs/sveltekit/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/sveltekit/**/*.ts', 'libs/sveltekit/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/sveltekit/**/*.js', 'libs/sveltekit/**/*.jsx'],
    rules: {},
  },
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
    ...config,
    files: [
      'libs/sveltekit/package.json',
      'libs/sveltekit/generators.json',
      'libs/sveltekit/executors.json',
      'libs/sveltekit/generators.json',
    ],
    rules: { '@nx/nx-plugin-checks': 'error' },
  })),
];
