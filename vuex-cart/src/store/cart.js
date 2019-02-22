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
        // 当改变对象下的某个属性时，直接进行改变 vue 认为没有修改，因为修改的都是同一个对象指向的地址是相同的，那么就要对对象进行重新赋值
        state.quantityById[productId]++
      }
      state.quantityById = { ...state.quantityById }
    }
  },
  actions: {
    addToCart({ commit }, productId) {
      commit('addToCart', productId)
    }
  },
  getters: {
    total(state, getters, rootState) {
      return state.cartProductsId.reduce(
        (num, id) =>
          num +
          state.quantityById[id] *
            rootState.products.all.find(product => product.id == id).price,
        0
      )
    }
  }
}
export default cart
