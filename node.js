/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['base', 'typescript', 'node'].map(name => require.resolve(`./bases/${name}`)),
};
