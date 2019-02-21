import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
// 添加了store 之后 vue 的所有组件内就可以使用 $store.state 访问store的数据了,组件内也可以使用 $store 下的方法 dispatch  commit
