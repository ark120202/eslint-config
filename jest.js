module.exports = {
  plugins: ['jest'],
  extends: 'plugin:jest/recommended',
  env: { jest: true },
  rules: {
    'jest/prefer-to-be-null': 2,
    'jest/prefer-to-have-length': 2,
    // Throws errors for non-literals
    'jest/prefer-to-be-undefined': 0,
  },
};
