import type { NuxtConfig } from "nuxt/config";
import { defineNuxtConfig } from "nuxt/config";

const locales = [ "en", "ru", "ko", "be", "kk" ];

const alias: NuxtConfig["alias"] = {
  "@t": "./types",
  "@style": "./styles",
  "@l": "./localization",
};


const typescript: NuxtConfig["typescript"] = {
  tsConfig: {
    compilerOptions: {
      importsNotUsedAsValues: "error",
    }
  }
};

const app: NuxtConfig["app"] = {
  head: {
    title: "Лог разработчика",
    // eslint-disable-next-line unicorn/text-encoding-identifier-case
    charset: "utf-8",
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/favicon/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#ee5899",
      },
      {
        rel: "shortcut icon",
        href: "/favicon/favicon.ico",
      },
    ],
    meta: [
      {
        name: "msapplication-TileColor",
        content: "#ee5899",
      },
      {
        name: "msapplication-Config",
        content: "/favicon/browserconfig.xml",
      },
      {
        name: "theme-color",
        content: "#fdeef5",
      }
    ]
  }
};

const modules: NuxtConfig["modules"] = [
  "nuxt-simple-sitemap",
  "@nuxtjs/stylelint-module",
  "@nuxtjs/eslint-module",
  "nuxt-content-assets",
  "@nuxt/content",
  "@nuxt/image",
  "@nuxtjs/i18n",
  "nuxt-icon",
  "nuxt-vitest"
];

const i18n: NuxtConfig["i18n"] = {
  locales,
  defaultLocale: "ru",
  strategy: "no_prefix",
  detectBrowserLanguage: {
    useCookie: true,
  },
};

const vite: NuxtConfig["vite"] = {
  vue: {
    script: {
      defineModel: true,
    }
  },
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
    theme: "css-variables",
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
    port: Number.parseInt(process.env.PORT ?? "8100"),
  },
  eslint: {
    lintOnStart: false,
  },
  app,
  modules,
  vite,
  alias,
  i18n,
  content,
  typescript,
});
