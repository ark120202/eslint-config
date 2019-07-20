/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['base', 'typescript', 'web'].map(name => require.resolve(`./bases/${name}`)),
};
