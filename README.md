# Blog ✨

## Stack 🥸
- Vue
- Nuxt
- Typescript
- Sass (SCSS)
- Ava
- Linters
  - ESLint
  - Commitlint
  - Stylelint

### ESLint modules 🔥
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io) - ESLint plugin for typescript;
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - Powerful rules for strict code;
- [eslint-plugin-vue](https://eslint.vuejs.org) - Eslint plugin for Vue.js;
- [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava) - Plugin for ava.js testing framework;
- [eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml) - Plugin for YAML files;
- [eslint-plugin-markdown](https://github.com/eslint/eslint-plugin-markdown) - Plugin for Markdown files;
- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - Plugin for compatibility with old browsers;
- [eslint-plugin-editorconfig](https://www.npmjs.com/package/eslint-plugin-editorconfig) - Plugin for linting files with EditorConfig;
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright) - Plugin for Playwright framework;
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - Plugin for sorting imports

### Stylelint modules ☄️
### Nuxt modules 💫
- [nuxt-icon](https://nuxt.com/modules/icon) - Adds component for various icons;
- [@nuxtjs/i18n](https://nuxt.com/modules/i18n) - Adds ability for translation;
- [@nuxt/image](https://nuxt.com/modules/image) - Adds a11y image component;
- [@nuxt/content](https://content.nuxtjs.org) - Adds content to the nuxt;

## Commands 🙌
If you can, you can use Webstorm commands via `Ctrl + Ctrl` keybinding

You also can use next terminal commands:

- `app`: Commands for app
    - `pnpm app:dev`: Run development server
    - `pnpm app:build`: Build the project
- `lint`: Commands for linters
  - `lint:eslint`: Run ESLint
  - `lint:stylelint`: Run Stylelint
- `test`: Commands for testing
  - `test:unit`: Commands for unit tests
    - `test:unit:run`: Run unit tests in CLI
  - `test:end`: Commands for end to end tests
    - `test:end:run`: Run end to end tests in CLI
    - `test:end:ui`: Run end to end tests in GUI
    - `test:end:setup`: Setup browsers for testing

## Additional 🤓
### Git hooks 🤞
This project has husky and [git hooks](https://gist.github.com/tokiory/5b99a68523065d86a218797d349fbbbd).

- **commit** \
  We use commitlint for linting commit messages;
- **pre-commit** \
  On pre-commit hook husky runs eslint and stylelint on every committed file;
- **push** \
  We have hook on push. It runs unit and end to end tests;
