const cart = {
  state: {
    quantityById: {},
    cartProductsId: []
  },
  mutations: {
    addToCart(state, productId) {
      if (state.cartProductsId.indexOf(productId) === -1) {
        state.cartProductsId.push(productId)
        state.quantityById[productId] = 1
      } else {
        state.quantityById[productId]++
      }
    }
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('addToCart', productId)
    }
  }
}
export default cart
