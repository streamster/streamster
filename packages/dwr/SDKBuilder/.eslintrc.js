module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "operator-linebreak": "off",
    "prefer-destructuring": "off",
    "class-methods-use-this": "off"
    // 'no-shadow': 'off',
  }
};
