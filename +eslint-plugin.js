/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: 'plugin:eslint-plugin/all',
  rules: {
    'report-message-format': ['error', '^[A-Z].*\\.$'],
  },
};
