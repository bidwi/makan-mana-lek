import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...compat.extends('airbnb-base', 'prettier'),

  {
    rules: {
      'import/no-extraneous-dependencies': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-restricted-globals': 0,
      'linebreak-style': 0,
      'consistent-return': 0,
      'no-prototype-builtins': 0,
      'no-undef': 0,
      'prefer-default-export': 0,
      'no-restricted-exports': 0,
      'import/prefer-default-export': 0,
      'import/no-named-as-default-member': 0,
      'import/no-named-as-default': 0,
      'no-param-reassign': 0,
      'no-unused-vars': 0,
      'no-empty-function': 0,
      'no-new': 0,
      'class-methods-use-this': 0,
      'no-plusplus': 0,
      'no-await-in-loop': 0,
      'prefer-destructuring': 0,
      'no-alert': 0,
    },
  },
];
