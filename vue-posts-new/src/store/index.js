import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  //  state 数据
  state: {
    // count: 10
    posts: [],
    comments: []
  },
  // mutation 函数 提供修改 state 的方法，函数的第一个参数就是 state
  mutations: {
    // 给 count + n
    // add(state, n) {
    //   state.count += n
    // }
    getPosts(state, posts) {
      state.posts = posts
    },
    getComments(state, comments) {
      state.comments = comments
    }
  },
  // action 函数 用来发出 mutations，函数的第一个参数是 context，我们需要 context 对象下的 commit 方法来发出 mutation，action和mutation函数名相同也没问题,只有 action 函数内能执行异步操作(ajax)
  actions: {
    // add(context,n){
    //   context.commit('add',n)
    // }
    // add({ commit }, n) {
    //   commit('add', n)
    // }
    getPosts({ commit }) {
      axios.get('http://localhost:3008/posts').then(res => {
        commit('getPosts', res.data)
      })
    },
    getComments({ commit }, postId) {
      axios.get(`http://localhost:3008/comments?postId=${postId}`).then(res => {
        commit('getComments', res.data)
      })
    }
  }
})

//组件(dispatch)---> action(commit) ---->mutation---->state
export default store
