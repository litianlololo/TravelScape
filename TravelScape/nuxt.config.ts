// https://nuxt.com/docs/api/configuration/nuxt-config

export default ({
  ssr: false, // 禁用服务端渲染
  css: ['~/assets/css/main.css'],
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
},
})
