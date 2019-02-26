export const state = () => ({
  posts: []
})
export const mutations = {
  getPosts(state, newPosts) {
    state.posts = newPosts
    // console.log('mutation', state.posts)
  }
}
export const actions = {
  async getPosts({ commit }) {
    const res = await this.$axios.get('http://localhost:3008/posts')
    // console.log('action', res)

    commit('getPosts', res.data)
  }
}
