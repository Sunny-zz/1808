import Vue from 'vue'
import Vuex from 'vuex'
import products from './products.js'
import cart from './cart.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    products,
    cart
  }
})
export default store
