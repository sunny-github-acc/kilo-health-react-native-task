module.exports = {
  extends: ["eslint:recommended"],
  plugins: [
    "react",
    "jest",
    "unused-imports",
    "simple-import-sort",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: [4, "double", { avoidEscape: true }],
    semi: ["error", "never"],
  },
}
