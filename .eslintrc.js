module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 16,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  extends: [
    'next', // nextjs
    'next/core-web-vitals', // nextjs
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: ['error', 'always'], // 세미콜론
    'react/no-unknown-property': ['error', { ignore: ['css'] }], // @emotion/css 사용 시 필요
    'linebreak-style': 0, //개행 체크 옵션
    'react/react-in-jsx-scope': 0, // React 전역 선언 X
    'react/prop-types': 0, //PropTypes 타입검사
    'no-unused-vars': 'off', // interface에 오류 제거
    '@typescript-eslint/no-unused-vars': 1, // interface에 오류 제거
    'no-useless-catch': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true, // prettier jsx single quote
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {},
      typescript: {},
    },
  },
};
