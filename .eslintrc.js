module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'react/jsx-uses-react': 1,
        'arrow-body-style': ['warn'],
        '@typescript-eslint/no-shadow': ['error'],
        'react-hooks/exhaustive-deps': 'warn',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
