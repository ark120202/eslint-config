// TODO: Consider using eslint-import-resolver-typescript

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/all',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    'import/no-commonjs': 'error',
    // Covered by @typescript-eslint/no-require-imports
    'global-require': 'off',
    // Covered by @typescript-eslint/no-misused-promises, TODO: it's not enabled in base config
    'no-async-promise-executor': 'off',

    // TODO: Should be covered by a type-based rule
    // 'import/no-deprecated': 'off',

    // Covered by TypeScript
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/export': 'off',

    '@typescript-eslint/ban-ts-ignore': 'off',
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
    '@typescript-eslint/camelcase': ['error', { properties: 'never', ignoreDestructuring: true }],
    // TODO: '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'no-public' } },
    ],
    '@typescript-eslint/generic-type-naming': ['error', '^T([A-Z][A-Za-z]*)?$'],
    // TODO: Enable?
    // '@typescript-eslint/member-naming': 'error',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      { ignoreParameters: false, ignoreProperties: false },
    ],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/103
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
    '@typescript-eslint/no-triple-slash-reference': 'off',
    // TODO: Conflicts with @typescript-eslint/consistent-type-definitions
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // Covered by @typescript-eslint/no-require-imports
    '@typescript-eslint/no-var-requires': 'off',
    // Covered by unicorn/no-for-loop
    // TODO: prefer after https://github.com/typescript-eslint/typescript-eslint/issues/702
    '@typescript-eslint/prefer-for-of': 'off',
    // TODO: Covered by @typescript-eslint/consistent-type-definitions
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/promise-function-async': [
      'error',
      // Works differently from tslint
      { allowAny: true, checkArrowFunctions: false },
    ],
    '@typescript-eslint/unbound-method': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/issues/698, https://github.com/typescript-eslint/typescript-eslint/pull/691
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
};
