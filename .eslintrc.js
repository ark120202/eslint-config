module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'promise',
    'unicorn',
  ],
  rules: {
    'no-debugger': 1,
    'no-console': 0,
    'default-case': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'class-methods-use-this': 0,

    // eslint-plugin-promise
    'promise/prefer-await-to-then': 2,

    // eslint-plugin-unicorn
    'unicorn/filename-case': 0,
    'unicorn/explicit-length-check': [2, {
      'non-zero': 'not-equal',
    }],
  },
};
