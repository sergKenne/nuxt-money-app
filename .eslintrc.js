module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
    plugins: ['@typescript-eslint'],
    // add your own ESLint rules here
    rules: {},
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
