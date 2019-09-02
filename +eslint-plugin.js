/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: 'plugin:eslint-plugin/all',
  plugins: ['eslint-plugin'],
  rules: {
    'eslint-plugin/report-message-format': ['error', '^[A-Z].*\\.$'],
  },
};
