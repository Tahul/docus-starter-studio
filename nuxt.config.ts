export default defineNuxtConfig({
  extends: ['@nuxt-themes/docus'],
  studio: {
    enabled: true
  },
  components: [
    {
      path: '~/components',
      global: true
    }
  ]
})
