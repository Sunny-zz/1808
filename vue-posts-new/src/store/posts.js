import axios from 'axios'
const posts = {
  state: {
    posts: []
  },
  mutations: {
    getPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('http://localhost:3008/posts').then(res => {
        commit('getPosts', res.data)
      })
    }
  }
}
export default posts
