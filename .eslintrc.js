module.exports = {
    parser: "@babel/eslint-paser",
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": "warn",
    },
};
