module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        "no-unused-vars": "warn",
        "no-unused-expressions": "warn",
    },
    plugins: ["ejs"],
};