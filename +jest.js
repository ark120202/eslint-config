/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/expect-expect': 'off',
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
    'jest/lowercase-name': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-empty-title': 'error',
    'jest/no-expect-resolves': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-todo': 'error',
    'jest/valid-title': 'error',
  },
};
