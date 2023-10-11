// https://nuxt.com/docs/api/configuration/nuxt-config

export default ({
  css: ['~/assets/css/main.css'],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://apis.juhe.cn',
        changeOrigin: true
      },
    }
  },
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  buildModules: [
    '@nuxtjs/proxy',
  ],
  devServer: {
    port: 3001,
    host: '0,0,0,0'
},
})
