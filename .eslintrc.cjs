module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
};
