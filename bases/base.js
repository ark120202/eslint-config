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
  plugins: ['prefer-arrow', 'prefer-class-properties', '@regru/prefer-early-return'],
  rules: {
    // Airbnb

    // Disabling rules
    'array-callback-return': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'max-classes-per-file': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-empty-function': 'off',
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-template-curly-in-string': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    // Disable for type cycles
    'import/no-cycle': 'off',
    // Covered by no-restricted-syntax
    'no-sequences': 'off',
    // https://github.com/benmosher/eslint-plugin-import/issues/1311
    // https://github.com/typescript-eslint/typescript-eslint/issues/113
    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/324
    'import/order': 'off',
    // Re-enabled in web
    'no-console': 'off',
    'import/no-dynamic-require': 'off',

    // Changing options
    'func-names': ['error', 'never'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // TODO: Enable in web?
    'import/no-extraneous-dependencies': ['error', {}],
    // Allow only `// fallthrough` comment
    'no-fallthrough': ['error', { commentPattern: /^ fallthrough$/.source }],
    'object-shorthand': [
      'error',
      'always',
      { avoidQuotes: true, ignoreConstructors: false, avoidExplicitReturnArrows: true },
    ],
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
      'SequenceExpression',
    ],
    // TODO: https://github.com/airbnb/javascript/issues/2076
    'spaced-comment': [
      'error',
      'always',
      {
        line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
        block: { exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true },
      },
    ],

    // Enabling rules
    'no-implicit-coercion': ['error', {}],
    // Provides better auto import suggestions
    'import/no-anonymous-default-export': [
      'error',
      // Remove on plugin's major https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md#options
      { allowCallExpression: false },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block', 'block-like', 'class'], next: '*' },
    ],

    // Commented with `TODO: enable, semver-major` in base config
    'require-atomic-updates': 'error',

    // https://github.com/prettier/eslint-config-prettier#special-rules
    'arrow-body-style': 'error',
    curly: ['error', 'multi-line', 'consistent'],
    'no-tabs': 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

    'prefer-arrow-callback': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      { disallowPrototype: true, singleReturnOnly: true, classPropertiesAllowed: false },
    ],

    // Extra plugins

    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/314
    'prefer-class-properties/prefer-class-properties': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/issues/16
    '@regru/prefer-early-return/prefer-early-return': ['error', { maximumStatements: 3 }],

    'promise/prefer-await-to-then': 'error',

    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'eslint-comments/no-unused-disable': 'error',

    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    // TODO: unicorn/custom-error-definition - not supports class properties
    'unicorn/expiring-todo-comments': [
      'error',
      // TODO: https://github.com/sindresorhus/eslint-plugin-unicorn/pull/400
      { allowWarningComments: true },
    ],
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
        // Generated from https://github.com/sindresorhus/eslint-plugin-unicorn/blob/c3326d218ee11bd32e0cf167774641749fe70d6b/rules/prevent-abbreviations.js
        // with following excludes: ["e", "env", "dev", "prod", "arg", "args", "db", "prop", "lib", "dir", "dirs", "ref", "refs", "pkg", "doc", "docs", "src", "props", "attr", "attrs"]
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
          req: { request: true },
          res: { response: true, result: true },
          btn: { button: true },
          msg: { message: true },
          len: { length: true },
          tmp: { temporary: true },
          param: { parameter: true },
          params: { parameters: true },
          tbl: { table: true },
          ctx: { context: true },
          mod: { module: true },
          arr: { array: true },
          ret: { returnValue: true },
          retval: { returnValue: true },
          ext: { extension: true },
          exts: { extensions: true },
          sep: { separator: true },
          elem: { element: true },
          dest: { destination: true },
          prev: { previous: true },
          curr: { current: true },
          cur: { current: true },
          acc: { accumulator: true },
          rel: { relative: true, related: true, relationship: true },
          conf: { config: true },
          temp: { temporary: true },
        },
      },
    ],
  },
};
