import axios from 'axios'
const products = {
  state: {
    all: []
  },
  mutations: {
    getProducts(state, products) {
      state.all = products
    }
  },
  actions: {
    getProducts({ commit }) {
      console.log(1)

      axios.get('http://localhost:3008/products').then(res => {
        commit('getProducts', res.data)
      })
    }
  }
}
export default products
