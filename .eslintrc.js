module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    // base
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // react
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',

    // import
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',

    // Prettier integration
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',

    // for Next.js
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // for TypeScript
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'default-case': 'off',
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
