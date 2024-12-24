// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:false,
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/main.css',
    '@/assets/scss/htmlTags.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ]
  
})
