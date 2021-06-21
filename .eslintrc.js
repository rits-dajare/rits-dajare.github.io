module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    // base
    'eslint:recommended',

    // React A11y
    'plugin:jsx-a11y/recommended',

    // Next.js
    'next',
    'next/core-web-vitals',

    // TypeScript
    'plugin:@typescript-eslint/recommended',

    // import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

    // Prettier integration
    'prettier',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' },
  },

  rules: {
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // restrict order of imports
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
