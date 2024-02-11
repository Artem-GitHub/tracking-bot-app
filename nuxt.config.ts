// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  devServer: { port: 3000 },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
  ],
  i18n: {
    locales: [
      {
        code: 'uk',
        file: 'uk.json',
      },
    ],
    lazy: false,
    langDir: 'locales/',
    defaultLocale: 'uk',
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
