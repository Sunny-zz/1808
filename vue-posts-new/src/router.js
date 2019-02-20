import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Post from './components/Post'
// 给vue 加载路由功能
Vue.use(VueRouter)

// 创建一个路由
const route = new VueRouter({
  routes: [
    {
      component: Home,
      path: '/'
    },
    {
      component: Post,
      path: '/post/:id'
    }
  ],
  mode: 'history'
})
export default route
