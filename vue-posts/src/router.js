import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Post from './components/Post'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/post',
      component: Post
    }
  ],
  mode: 'history'
})
export default router
