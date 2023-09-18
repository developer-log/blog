![Github Banner](https://github.com/developer-log/blog/assets/101672047/3e31b542-9423-4374-b2ab-e3a8c1d86171)

<p align="left">
  <a href="https://github.com/developer-log/blog/actions/workflows/build.yml" target="_blank"><img src="https://github.com/developer-log/blog/actions/workflows/build.yml/badge.svg" alt="Unit Test" /></a>
  <a href="https://github.com/developer-log/blog/actions/workflows/unit.yml" target="_blank"><img src="https://github.com/developer-log/blog/actions/workflows/unit.yml/badge.svg" alt="Unit Test" /></a>
  <a href="https://github.com/developer-log/blog/actions/workflows/lint.yml" target="_blank"><img src="https://github.com/developer-log/blog/actions/workflows/lint.yml/badge.svg" alt="Unit Test" /></a>
</p>

In the bustling realm of technology, where innovation is the heartbeat, "Developer Log" emerges as a guiding light for both seasoned developers and aspiring enthusiasts alike. This unique blog serves as a sanctuary for code aficionados, offering a rich tapestry of insights, experiences, and solutions in the ever-evolving world of software development.

## Stack 🥸
- Nuxt
- Typescript
- Sass
- Vitest
- Linters
  - ESLint
  - Commitlint
  - Stylelint
  - SVGLint

### ESLint modules 🔥
- [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - Plugin for compatibility with old browsers;
- [eslint-plugin-editorconfig](https://www.npmjs.com/package/eslint-plugin-editorconfig) - Plugin for linting files with EditorConfig;
- [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright) - Plugin for Playwright framework;
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - Plugin for sorting imports;
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - Powerful rules for strict code;
- [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) - Plugin for vitest testing framework;
- [eslint-plugin-vue](https://eslint.vuejs.org) - Eslint plugin for Vue.js;
- [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) - Plugin for a11y support;
- [eslint-plugin-yml](https://www.npmjs.com/package/eslint-plugin-yml) - Plugin for YAML files;
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io) - ESLint plugin for typescript;

### Stylelint modules ☄️
### Nuxt modules 💫
- [@nuxtjs/i18n](https://nuxt.com/modules/i18n) - Adds ability for translation;
- [nuxt-simple-sitemap](https://nuxt.com/modules/simple-sitemap) - Adds sitemap;
- [nuxt-font-loader](https://www.npmjs.com/package/nuxt-font-loader) - Optimized font loading for Nuxt 3+;
- [nuxt-content-assets](https://nuxt.com/modules/content-assets) - Add relative paths for content
- [@nuxt/content](https://content.nuxtjs.org) - Adds content to the nuxt;
- [@nuxt/devtools](https://nuxt.com/modules/devtools) - Devtools for Nuxt 3;
- [@nuxt/image](https://nuxt.com/modules/image) - Adds a11y image component;
- [nuxt-icon](https://nuxt.com/modules/icon) - Adds component for various icons;
- [nuxt/vitest](https://nuxt.com/modules/vitest) - Adds support for vitest;

## Setup 👌
If you don't have a `pnpm` - you will need it.

```bash
# Installing of pnpm
npm i -g pnpm
```

After the installation of the pnpm - you can install dependecies of the project:

```bash
pnpm i
```

> Warn:
> You should create an `.env` file

Here is the template file for .env:

```dotenv
# Sentry
SENTRY_DSN=<SENTRY_DSN>

# Supabase
SUPABASE_URL=<SUPABASE_URL>
SUPABASE_KEY=<SUPABASE_KEY>
SUPABASE_SERVICE_KEY=<SUPABASE_SERVICE_KEY>

# Nuxt
PORT=8100
PUBLIC_URL=https://developer-log.vercel.app
```

After creation of dotenv file you can run project with the following command:

```bash
pnpm app:dev
```
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
  - `lint:svglint`: Lint svg files with svglint;
  - `lint:staged`: Lint all staged files;
  - `lint:all`: Run ESLint for all project files;
    - `lint:all:stylelint`: Lint all files with Stylelint;
    - `lint:all:eslint`: Lint all files with ESLint;
    - `lint:all:svglint`: Lint all svg files with svglint;
- `test`: Commands for testing
  - `test:unit`: Commands for unit tests;
    - `test:unit:run`: Run unit tests in CLI;
    - `test:unit:gui`: Run unit tests in GUI;
    - `test:unit:watch`: Watch for unit tests;
  - `test:end`: Commands for end to end tests;
    - `test:end:run`: Run end to end tests in CLI;
    - `test:end:ui`: Run end to end tests in GUI;
    - `test:end:setup`: Setup browsers for testing;
    - `test:end:record`: Record End to end test;
- `deploy`: Commands for deploying
  - `deploy:dev`: Deploy to the development server;
  - `deploy:prod`: Deploy to the production server;
- `translate`: Automatic translate;

## Testing 🥰
Testing is done thanks to two frameworks:
- vitest
- playwright

Vitest is used for unit tests. It use happy dom to simulate browser DOM and
`@nuxt/test-utils`.

Playwright is used for end to end tests. It uses special selectors, those defined in `tests/data-selectors.ts`.

## Internationalization 👅
<p align="left">
  <a href="https://crowdin.com/project/developer-log"><img src="https://badges.crowdin.net/developer-log/localized.svg" alt="Localization" /></a>
</p>
Languages dictionaries are located in `@/localization`. Following languages are supported now:

- Russian (Main language);
- English;
- Belarusian;
- Korean;
- Kazakhstan;

> You can also contribute to localization on [Crowdin](https://crowdin.com/project/developer-log)

## Hooks 🤞
This project has husky and [git hooks](https://gist.github.com/tokiory/5b99a68523065d86a218797d349fbbbd).

- **commit** \
  We use commitlint for linting commit messages;
- **pre-commit** \
  On pre-commit hook husky runs eslint and stylelint on every committed file;
- **push** \
  We have hook on push. It runs unit and end to end tests;


## Conventions 🤝

1. We're building mobile-first layout
2. We're using `from-{breakpoint}` mixin, it's located in [`styles/prebuild/breakpoint.scss`](styles/prebuild/breakpoint.scss)

### Adaptive 🤳
- **Minimal Value**: 400px;
- **Maximum value**: 2048px;

For adaptive layout we use sass mixins, they are defined in `styles/prebuild/breakpoint.scss`.

Blog also have a dark theme. Mixin for dark theme is defined in `styles/prebuild/theme.scss`.


### Excalidraw ✍️
Sometimes I use Excalidraw to illustrate a concept. The problem with Excalidraw is that it loads fonts from its resource.
In order to reduce the delay before the fonts appear correctly in the diagrams,
I downloaded the font that Excalidraw uses ([Virgil](https://virgil.excalidraw.com/)).

The problem is that Excalidraw sets its own font in each of the svg we use.
That is why when using the new svg file from Excalidraw we need to replace this code:

```svg
<defs>
  <style class="style-fonts">
    @font-face {
    font-family: "Virgil";
    src: url("https://excalidraw.com/Virgil.woff2");
    }
    @font-face {
    font-family: "Cascadia";
    src: url("https://excalidraw.com/Cascadia.woff2");
    }
  </style>
</defs>
```

To this code:

```svg
<defs>
  <style class="style-fonts">
    @font-face {
    font-family: "Virgil";
    src: url("/fonts/virgil/Virgil.woff2"); // Use downloaded font
    }
  </style>
</defs>
```

> **Note**
> Later I plan to write a plugin for Vite to automatically link such font imports from third-party resources
