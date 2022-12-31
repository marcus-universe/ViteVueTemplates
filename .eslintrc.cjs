/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-multiple-template-roots': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 6,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'eol-last': ['off', 'always'],
    'space-before-function-paren': ['off', 'always'],
    'comma-dangle': ['off', 'always'],
    indent: ['off', 6],
    'no-trailing-spaces': [
      'off',
      {
        skipBlankLines: true,
      },
    ],
    'object-curly-spacing': ['off', 'always'],
    quotes: ['off', 'double'],
    'dot-notation': [
      'off',
      {
        allowKeywords: true,
      },
    ],
    'multi-word-component-names': [
      0,
      {
        componentName: '^[a-zA-Z]+$',
      },
    ],
    'vue/multi-word-component-names': [
      'off',
      {
        componentName: '^[a-zA-Z]+$',
      },
    ],
    'no-dupe-keys': ['off'],
    'vue/keyword-spacing': 'warn',
    'eslint-disable-next-line': 'off',
    'eslint-disable': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
