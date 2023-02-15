/*
 * @Author: 尹成诺
 * @Date: 2023-02-15 16:37:29
 * @LastEditors: 尹成诺
 * @LastEditTime: 2023-02-15 17:05:51
 * @Description: file content
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  "prettier/prettier": [
    "error",
    {},
    {
      usePrettierrc: false,
    },
  ],
};
