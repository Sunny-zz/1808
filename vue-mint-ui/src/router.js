import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Me from './components/Me'
import Search from './components/Search'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
export default router
