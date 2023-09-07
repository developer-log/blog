![Github Banner](https://github.com/tokiory-blog/blog/assets/101672047/c83ecdde-15ac-456d-b868-3011811de9c4)

<p align="left">
  <a href="https://github.com/tokiory-blog/blog/actions/workflows/build.yml" target="_blank"><img src="https://github.com/tokiory-blog/blog/actions/workflows/build.yml/badge.svg" alt="Unit Test" /></a>
  <a href="https://github.com/tokiory-blog/blog/actions/workflows/unit.yml" target="_blank"><img src="https://github.com/tokiory-blog/blog/actions/workflows/unit.yml/badge.svg" alt="Unit Test" /></a>
</p>

## Stack 🥸
- Vue
- Nuxt
- Typescript
- Sass (SCSS)
- Vitest
- Linters
  - ESLint
  - Commitlint
  - Stylelint

### ESLint modules 🔥
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io) - ESLint plugin for typescript;
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - Powerful rules for strict code;
- [eslint-plugin-vue](https://eslint.vuejs.org) - Eslint plugin for Vue.js;
- [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) - Plugin for vitest testing framework;
- [eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml) - Plugin for YAML files;
- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - Plugin for compatibility with old browsers;
- [eslint-plugin-editorconfig](https://www.npmjs.com/package/eslint-plugin-editorconfig) - Plugin for linting files with EditorConfig;
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright) - Plugin for Playwright framework;
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - Plugin for sorting imports;
- [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) - Plugin for a11y support;

### Stylelint modules ☄️
### Nuxt modules 💫
- [nuxt-icon](https://nuxt.com/modules/icon) - Adds component for various icons;
- [@nuxtjs/i18n](https://nuxt.com/modules/i18n) - Adds ability for translation;
- [@nuxt/image](https://nuxt.com/modules/image) - Adds a11y image component;
- [nuxt-content-assets](https://nuxt.com/modules/content-assets) - Add relative paths for content
- [@nuxt/content](https://content.nuxtjs.org) - Adds content to the nuxt;
- [@nuxt/vitest](https://nuxt.com/modules/vitest) - Adds support for vitest;

## Commands 🙌
If you can, you can use Webstorm commands via `Ctrl + Ctrl` keybinding

You also can use next terminal commands:

- `app`: Commands for app
    - `app:dev`: Run development server;
    - `app:build`: Build the project;
    - `app:run`: Run production server;
- `docker`: Commands for docker containerization
  - `docker:build`: Build the project in a docker container;
  - `docker:run`: Run docker container with the app;
- `lint`: Commands for linters
  - `lint:eslint`: Run ESLint;
  - `lint:stylelint`: Run Stylelint;
  - `lint:all`: Run ESLint for all project files;
- `test`: Commands for testing
  - `test:unit`: Commands for unit tests;
    - `test:unit:run`: Run unit tests in CLI;
  - `test:end`: Commands for end to end tests;
    - `test:end:run`: Run end to end tests in CLI;
    - `test:end:ui`: Run end to end tests in GUI;
    - `test:end:setup`: Setup browsers for testing;
- `deploy`: Commands for deploying
  - `deploy:dev`: Deploy to the development server;
  - `deploy:prod`: Deploy to the production server;
- `translate`: Automatic translate;

## Additional 🤓

### Testing 🥰
Testing is done thanks to three frameworks:
  - vitest
  - playwright

### Languages 👅
Languages dictionaries are located in `@l`. Following languages are supported now:

- Russian (Main language);
- English;
- Belarusian;
- Korean;

### Adaptive 🤳
- **Minimal Value**: 400px;
- **Maximum value**: 2048px;

#### Conventions
1. We're building mobile-first layout
2. We're using `from-{breakpoint}` mixin, it's located in [`styles/prebuild/breakpoint.scss`](styles/prebuild/breakpoint.scss)

### Git hooks 🤞
This project has husky and [git hooks](https://gist.github.com/tokiory/5b99a68523065d86a218797d349fbbbd).

- **commit** \
  We use commitlint for linting commit messages;
- **pre-commit** \
  On pre-commit hook husky runs eslint and stylelint on every committed file;
- **push** \
  We have hook on push. It runs unit and end to end tests;
