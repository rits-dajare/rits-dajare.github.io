module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsx-a11y'],
  extends: [
    // base
    'eslint:recommended',

    // React
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

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

    // for Next.js
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // for TypeScript
    'react/prop-types': 'off',

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
