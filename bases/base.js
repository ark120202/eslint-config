// @ts-ignore
const { rules: baseImportsRules } = require('eslint-config-airbnb-base/rules/imports');

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
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'] } },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
  rules: {
    // Airbnb

    // Disabling rules
    'array-callback-return': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'guard-for-in': 'off',
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
    'import/extensions': [
      baseImportsRules['import/extensions'][0],
      baseImportsRules['import/extensions'][1],
      { ...baseImportsRules['import/extensions'][2], ts: 'never', tsx: 'never' },
    ],
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
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    // TODO: Enable?
    'unicorn/no-reduce': 'off',
    'unicorn/prefer-reflect-apply': 'off',
    'unicorn/custom-error-definition': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/better-regex': ['error', { sortCharacterClasses: false }],
    'unicorn/filename-case': [
      'error',
      { cases: { kebabCase: true, camelCase: true, pascalCase: true } },
    ],
    'unicorn/explicit-length-check': ['error', { 'non-zero': 'greater-than' }],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: true,
        extendDefaultReplacements: false,
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/7781c3f3a424a330cbd6c33e8f76fbf651723ba2/rules/prevent-abbreviations.js
        // const excludes = new Set(["arg", "args", "attr", "attrs", "db", "dev", "dir", "dirs", "doc", "docs", "e", "env", "envs", "lib", "pkg", "prod", "prop", "props", "ref", "refs", "src"]);
        // const defaultReplacements = eval(`(${document.body.textContent.match(/const defaultReplacements = ({.+?});/s)[1]})`);
        // JSON.stringify(Object.fromEntries(Object.entries(defaultReplacements).filter(([key]) => !excludes.has(key))));
        replacements: {
          acc: { accumulator: true },
          arr: { array: true },
          btn: { button: true },
          cb: { callback: true },
          conf: { config: true },
          ctx: { context: true },
          cur: { current: true },
          curr: { current: true },
          dest: { destination: true },
          el: { element: true },
          elem: { element: true },
          err: { error: true },
          evt: { event: true },
          ext: { extension: true },
          exts: { extensions: true },
          len: { length: true },
          mod: { module: true },
          msg: { message: true },
          num: { number: true },
          obj: { object: true },
          opts: { options: true },
          param: { parameter: true },
          params: { parameters: true },
          prev: { previous: true },
          rel: { related: true, relationship: true, relative: true },
          req: { request: true },
          res: { response: true, result: true },
          ret: { returnValue: true },
          retval: { returnValue: true },
          sep: { separator: true },
          stdDev: { standardDeviation: true },
          str: { string: true },
          tbl: { table: true },
          temp: { temporary: true },
          tit: { title: true },
          tmp: { temporary: true },
          val: { value: true },
        },
      },
    ],
  },
};
