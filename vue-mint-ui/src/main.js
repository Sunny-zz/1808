import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Tabbar, TabItem } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.config.productionTip = false
// ReactDOM.render(<App />,dom节点)
// 将虚拟的 vue dom 节点，渲染到真实的 dom 节点上
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
