/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./bases/base'), require.resolve('./bases/node')],
  overrides: [{ files: '**/*.{ts,tsx}', extends: require.resolve('./bases/typescript') }],
};
