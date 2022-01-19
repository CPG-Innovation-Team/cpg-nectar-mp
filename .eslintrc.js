module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  globals: {
    getApp: 'readonly',
    uni: 'readonly',
    defineProps: 'readonly',
  },
  rules: {
    'max-len': [1, { code: 120 }],
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'object-curly-newline': 0,
  },
};
