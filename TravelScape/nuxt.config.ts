// https://nuxt.com/docs/api/configuration/nuxt-config

export default ({

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

  head: {
    script: [
      // 设置安全密钥
      {
        innerHTML: `window._AMapSecurityConfig = {
          securityJsCode: '17c389ea6936a2d4164f9a8f3d22b18a',
        };`,
        type: 'text/javascript',
        charset: 'utf-8'
      },
      // 引入高德地图API，并替换为您的API密钥
      {
        src: 'https://webapi.amap.com/maps?v=1.4.15&key=4a1b6017bf86a5454e5a2db414d42a2e',
        type: 'text/javascript',
        charset: 'utf-8',
        async: true,
        defer: true
      }
    ]
  },
})
