/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'prettier/unicorn',
  ],
  rules: {
    'array-callback-return': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-empty-function': 'off',
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    // Disable for type cycles
    'import/no-cycle': 'off',
    // Provides better auto import suggestions
    'import/no-anonymous-default-export': [
      'error',
      // Remove on plugin's major https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md#options
      { allowCallExpression: false },
    ],
    // https://github.com/benmosher/eslint-plugin-import/issues/1311
    // https://github.com/typescript-eslint/typescript-eslint/issues/113
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/324
    'import/order': 'off',

    'no-constant-condition': ['error', { checkLoops: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    // Space before and no space after ensures that `//` is always used
    'no-fallthrough': ['error', { commentPattern: /^ fallthrough$/.source }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
    ],
    // TODO: Enable in web?
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],

    // Re-enabled in web
    'no-console': 'off',
    'import/no-dynamic-require': 'off',

    // https://github.com/prettier/eslint-config-prettier#special-rules
    'arrow-body-style': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'no-tabs': 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

    // Extra plugins

    'promise/prefer-await-to-then': 'error',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',

    'unicorn/no-process-exit': 'off',
    // TODO: unicorn/custom-error-definition - not supports class properties
    'unicorn/filename-case': [
      'error',
      { cases: { kebabCase: true, camelCase: true, pascalCase: true } },
    ],
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: true,
        checkProperties: false,

        extendDefaultReplacements: false,
        replacements: {
          err: { error: true },
          cb: { callback: true },
          opts: { options: true },
          str: { string: true },
          obj: { object: true },
          num: { number: true },
          val: { value: true },
          evt: { event: true },
          el: { element: true },
          btn: { button: true },
          ctx: { context: true },
          mod: { module: true },
          arr: { array: true },
          ret: { returnValue: true },
          retval: { returnValue: true },
          ext: { extension: true },
          exts: { extensions: true },
          dir: { directory: true },
          dirs: { directories: true },
          sep: { separator: true },
          rel: { relative: true, related: true, relationship: true },
          conf: { config: true },
        },
      },
    ],
  },
};
