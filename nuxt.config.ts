// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/icon", "nuxt-swiper"],
  app: {
    head: {
      charset: "utf-8",
      titleTemplate: "Round | %s",
      viewport: "width=device-width, initial-scale=1",

      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    },
  },
});
