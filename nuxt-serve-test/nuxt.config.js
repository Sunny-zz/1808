const pkg = require('./package')
// import axios from 'axios'
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'hello nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['assets/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
  // 静态应用部署 使用 npm run generate,并且在 nuxt.config.js 中配置 generate，那么就会将pages 下的所有路由生成对应的页面，最后将 dist 文件夹下的所有文件上传到服务器即可
  // generate: {
  //   routes: function() {
  //     return axios.get('http://localhost:3008/posts').then(res => {
  //       return res.data.map(post => {
  //         return '/post/' + post.id
  //       })
  //     })
  //   }
  // }

  // 服务器渲染部署
  // 在项目下执行 npm run build ,然后将 .nuxt  static  nuxt.config.js  package.json 四个文件放到服务器下
  // 在任何地方，新建一个文件夹(项目名)
}
