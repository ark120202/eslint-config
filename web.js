/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [require.resolve('./bases/base'), require.resolve('./bases/web')],
  overrides: [{ files: '**/*.ts', extends: require.resolve('./bases/typescript') }],
};
