import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Activities from './components/Activities'
import Topics from './components/Topics'
import PostList from './components/PostList'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // 子路由内的 以 /  开头代表的是 根路径，所以子路由不需要以 / 开头
        {
          //      /          /welcome/:type
          path: '',
          component: PostList
        },
        {
          path: 'welcome/:type',
          component: PostList
        }
      ]
    },
    {
      path: '/activities',
      component: Activities
    },
    {
      path: '/topics',
      component: Topics
    }
  ],
  mode: 'history'
})

export default router
