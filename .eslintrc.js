const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  extends: [
    // defines preset rules.
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  plugins: [],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true
    }
  },
  env: {
    // helps eslint define global variables for modules listed here.
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    mocha: true
  },
  rules: {
    // custom-defined rules.
    "react/jsx-one-expression-per-line": OFF,
    "react/jsx-filename-extension": [WARN, { extensions: [".js", ".jsx"] }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    "react/jsx-closing-bracket-location": [OFF, { nonEmpty: "after-props", selfClosing: "after-props" }],
    // WARNING: the rules below need to be shut OFF because they conflict with "plugin:prettier".
    "react/jsx-closing-tag-location": OFF,
    "react/jsx-curly-spacing": OFF,
    "react/jsx-equals-spacing": OFF,
    "react/jsx-first-prop-new-line": OFF,
    "react/jsx-indent": OFF,
    "react/jsx-indent-props": OFF,
    "react/jsx-max-props-per-line": OFF,
    "react/jsx-props-no-multi-spaces": OFF,
    "react/jsx-tag-spacing": OFF,
    "react/jsx-wrap-multilines": OFF,
    "react/self-closing-comp": OFF
  }
};
