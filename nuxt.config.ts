// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "nuxt-icon",
  ],
  content: {},
  css: [
    "normalize.css/normalize.css"
  ],
  devServer: {
    port: 8100,
  }
});
