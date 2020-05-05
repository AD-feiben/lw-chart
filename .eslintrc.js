module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    env: { es6: true },
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
      // 禁止使用 var
      'no-var': "error",
      'no-useless-escape': 0,
      "@typescript-eslint/no-unused-vars": [
        'error',
        {
          argsIgnorePattern: '^h$'
        }
      ],
      '@typescript-eslint/semi': ['error'],
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/member-ordering': [
        2,
        {
          default: [
            'constructor',
            'private-field',
            'protected-field',
            'public-field',
            'field',
            'private-method',
            'protected-method',
            'public-method',
            'method'
          ]
        }
      ]
  }
}