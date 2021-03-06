var OFF = 0,
  WARN = 1,
  ERROR = 2;

module.exports = {
  extends: ['plugin:flowtype/recommended', 'airbnb', 'prettier', 'prettier/react'],
  plugins: ['flowtype', 'prettier', 'react'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  rules: {
    'space-before-function-paren': [ERROR, 'never'],
    'eol-last': OFF,
    'comma-dangle': ['error', { functions: 'never' }],
    'func-names': [ERROR, 'as-needed'],
    'react/jsx-no-bind': [ERROR, {}]
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  }
};
