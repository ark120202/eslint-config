/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'no-console': 'warn',
    'import/no-dynamic-require': 'error',
    'import/no-nodejs-modules': 'error',
    'import/dynamic-import-chunkname': 'error',

    // TODO: Disable import/no-webpack-loader-syntax?
  },
};
