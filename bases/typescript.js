// TODO: Consider using eslint-import-resolver-typescript

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    // Covered by TypeScript
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'off',

    // `allowRequire` is covered by @typescript-eslint/no-require-imports
    'import/no-commonjs': ['error', { allowRequire: true }],
    // Covered by @typescript-eslint/no-require-imports
    'global-require': 'off',
    // Covered by @typescript-eslint/no-misused-promises, TODO: it's not enabled in base config
    'no-async-promise-executor': 'off',

    // TODO: Should be covered by a type-based rule
    // 'import/no-deprecated': 'off',

    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: null,
          CallableFunction: { fixWith: '(...args: any[]) => any' },
          NewableFunction: { fixWith: 'new (...args: any[]) => any' },
        },
      },
    ],
    camelcase: 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    '@typescript-eslint/class-name-casing': 'error',
    // TODO: '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'no-public' } },
    ],
    '@typescript-eslint/generic-type-naming': ['error', '^T([A-Z][A-Za-z]*)?$'],
    '@typescript-eslint/interface-name-prefix': 'error',
    // TODO: Enable?
    // '@typescript-eslint/member-naming': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      // TODO: 2.0.0 - remove
      { ignoreParameters: false, ignoreProperties: false },
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': [
      'error',
      // TODO: 2.0.0 - remove
      { allowDestructuring: true },
    ],
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // TODO: Enable instead of unicorn/no-for-loop after https://github.com/typescript-eslint/typescript-eslint/issues/702
    // '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': [
      'error',
      { allowAny: true, checkArrowFunctions: false },
    ],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
};
