module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },

  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:unicorn/recommended",
    "plugin:compat/recommended",
    "plugin:yml/standard",
    "plugin:ava/recommended",
    "plugin:editorconfig/all",
  ],

  ignorePatterns: [ "pnpm-lock.yaml" ],
  "overrides": [
    {
      files: [ "*.yaml", "*.yml" ],
      parser: "yaml-eslint-parser",
    },
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      },
      rules: {
        "unicorn/prefer-module": "off",
      }
    }
  ],

  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },

  "plugins": [
    "@typescript-eslint",
    "vue",
    "unicorn",
    "compat",
    "ava",
    "editorconfig",
    "simple-import-sort",
  ],

  "rules": {
    "sort-imports": "off",
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            // Internal
            "^\\u0000",
            "#imports",
            "#app",

            // Imports from @
            "^@(/.*|$)",

            // Relative imports
            "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$",
            "^\\.\\.(?!/?$)", "^\\.\\./?$",

            // Types
            "^@(t|/types)(/.*|$)",

            // Styles
            "^@(s|/styles)(/.*|$)",
            "^.+\\.s?css$"
          ]
        ]
      }
    ],
    "simple-import-sort/exports": "error",
    "vue/multi-word-component-names": "off",
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "vue/component-name-in-template-casing": [ "error", "PascalCase", {
      "registeredComponentsOnly": false,
      "ignores": []
    } ],
  }
};
