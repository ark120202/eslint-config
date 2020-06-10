/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    'jest/expect-expect': 'off',
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
    'jest/lowercase-name': 'error',
    // TODO: Should be covered by a type-based rule
    'jest/no-deprecated-functions': 'error',
    'jest/no-restricted-matchers': [
      'error',
      {
        resolves: 'Use `expect(await promise)` instead.',
        toBeTruthy: 'Avoid `toBeTruthy`',
        toBeFalsy: 'Avoid `toBeFalsy`',
      },
    ],
    'jest/no-test-return-statement': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-todo': 'error',
    'jest/valid-title': 'error',
  },
};
