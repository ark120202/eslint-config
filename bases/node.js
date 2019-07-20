/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['node'],
  settings: {
    node: { convertPath: { 'src/**/*.{j,t}s?(x)': ['^src/(.+?)\\.[jt]sx?$', 'lib/$1.js'] } },
  },
  rules: {
    'node/no-unpublished-bin': 'error',
    // node/no-unpublished-import doesn't allow importing types declared only in dev?
    'node/no-unsupported-features/node-builtins': 'error',
    // https://github.com/mysticatea/eslint-plugin-node/issues/96
    // 'node/shebang': 'error',

    // TODO: Should be covered by a type-based rule
    'node/no-deprecated-api': 'error',

    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34960
    // 'node/prefer-global/url-search-params': ['error', 'always'],
    // 'node/prefer-global/url': ['error', 'always'],
  },
};
