const cart = {
  state: {
    quantityById: {
      '1': 4,
      '3': 2
    },
    cartProductsId: [1, 3]
  },
  getters: {
    total(state, getters, rootState) {}
  }
}
export default cart
