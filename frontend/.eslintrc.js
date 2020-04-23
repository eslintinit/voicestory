module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    /* Next.js provider React by default to each component */
    'react/react-in-jsx-scope': 0,

    /* We have many styled-components files which only export
     * one component */
    'import/prefer-default-export': 0,

    /* We currently dont do type checks in this project */
    'react/prop-types': 0,

    /* */
    'react/jsx-filename-extension': 0,

    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-wrap-multilines': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
}
