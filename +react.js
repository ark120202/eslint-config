/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    'react/self-closing-comp': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FunctionComponent': { message: 'Use React.FC instead', fixWith: 'React.FC' },
        },
      },
    ],
  },
};
