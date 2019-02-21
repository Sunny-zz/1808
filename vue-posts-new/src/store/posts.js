import axios from 'axios'
const posts = {
  state: {
    posts: []
  },
  mutations: {
    // 模块内的 mutation 函数的第一个参数接收的是局部状态，也就是说该模块自己的state
    getPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    // 在 action 函数里面有时候可能会用到局部的 state 还有整体的 state，其实这些值都存储在 action 函数的第一个参数 context 对象内，{state,commit,rootState}
    getPosts({ commit }) {
      axios.get('http://localhost:3008/posts').then(res => {
        commit('getPosts', res.data)
      })
    }
  }
}
export default posts
