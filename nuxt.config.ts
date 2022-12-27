export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  modules: ['tahul-nuxt-hq-studio-test'],
  studio: {
    enabled: true
  },
  pinceau: {
    studio: true
  }
})
