module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: ['promise', 'unicorn', 'markdown', 'prettier'],
  rules: {
    'no-debugger': 1,
    'no-console': 0,
    'default-case': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,

    // eslint-plugin-import
    'import/prefer-default-export': 0,

    // eslint-plugin-promise
    'promise/prefer-await-to-then': 2,

    // eslint-plugin-unicorn
    'unicorn/filename-case': 0,
    'unicorn/explicit-length-check': [
      2,
      {
        'non-zero': 'greater-than',
      },
    ],

    // eslint-plugin-prettier
    'prettier/prettier': 2,
  },
};
