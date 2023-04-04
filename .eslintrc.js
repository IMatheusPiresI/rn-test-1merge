module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
      },
    ],
    "object-curly-spacing": ["warn", "always"],
    "no-used-vars": 0,
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "react/jsx-uses-react": 1,
    "react-hooks/exhaustive-deps": "warn",
    "space-in-brackets": 0,
  },
};
