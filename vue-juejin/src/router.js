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
        {
          //      /          /welcome/:type
          path: '/',
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
