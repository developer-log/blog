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

const fontLoader: NuxtConfig["fontLoader"] = {
  local: [
    {
      src: "/fonts/virgil/Virgil.woff2",
      family: "Virgil",
    },
  ]
};

const modules: NuxtConfig["modules"] = [
  "@nuxtjs/i18n",
  "nuxt-simple-sitemap",
  "nuxt-font-loader",
  "nuxt-content-assets",
  "@nuxt/content",
  "@nuxt/image",
  "nuxt-icon",
  "nuxt-vitest",
  "@nuxt/devtools",
];

const image: NuxtConfig["image"] = {
  presets: {
    stack: {
      modifiers: {
        format: "webp",
        width: 44,
        fit: "outside",
      }
    }
  }
};

const i18n: NuxtConfig["i18n"] = {
  locales: locales.map(item => ({ code: item, iso: item })),
  defaultLocale: "ru",
  strategy: "prefix_except_default",
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
  telemetry: {
    enabled: false,
  },
  router: {
    options: {
      sensitive: false,
    }
  },
  css: [
    "normalize.css/normalize.css"
  ],
  devServer: {
    port: Number.parseInt(process.env.PORT ?? "8100"),
  },
  app,
  modules,
  fontLoader,
  vite,
  alias,
  i18n,
  content,
  image,
  typescript,
});
