import js from "@eslint/js";
export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        URL: "readonly",
        fetch: "readonly",
        document: "readonly",
        HTMLInputElement: "readonly",
        window: "readonly",
        setTimeout: "readonly",
      },
    },
  },
];
