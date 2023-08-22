// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from "nuxt/config";

const locales = [ "en", "ru" ];

const alias: NuxtConfig["alias"] = {
  "@t": "./types",
  "@c": "./composables",
  "@s": "./server",
  "@l": "./localization",
  "@test": "./tests",
};

const modules: NuxtConfig["modules"] = [
  "@nuxt/content",
  "@nuxt/image",
  "@nuxtjs/i18n",
  "nuxt-icon",
];

const i18n: NuxtConfig["i18n"] = {
  locales,
  defaultLocale: "ru",
  strategy: "no_prefix",
};

const vite: NuxtConfig["vite"] = {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          "@/styles/prebuild/index"
        ].map(item => `@import "${item}";`).join(""),
      }
    }
  }
};

const content: NuxtConfig["content"] = {
  locales,
  defaultLocale: "ru",
  highlight: {
    theme: "solarized-light",
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  anchorLinks: {
    depth: 4,
  },
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "normalize.css/normalize.css"
  ],
  devServer: {
    port: 8100,
  },
  modules,
  vite,
  alias,
  i18n,
  content,
});
