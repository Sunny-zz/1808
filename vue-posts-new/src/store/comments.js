import axios from 'axios'
const comments = {
  state: {
    comments: []
  },
  mutations: {
    getComments(state, comments) {
      state.comments = comments
    },
    addComment(state, newComment) {
      state.comments.push(newComment)
    }
  },
  actions: {
    getComments({ commit }, postId) {
      axios.get(`http://localhost:3008/comments?postId=${postId}`).then(res => {
        commit('getComments', res.data)
      })
    },
    addComment({ commit }, { newComment, clearInput }) {
      axios.post(`http://localhost:3008/comments`, newComment).then(res => {
        commit('addComment', res.data)
        clearInput()
      })
    }
  }
}
export default comments
