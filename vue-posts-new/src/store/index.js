import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  //  state 数据
  state: {
    count: 10
  },
  // mutation 函数 提供修改 state 的方法，函数的第一个参数就是 state
  mutations: {
    add(state, n) {
      state.count += n
    }
  },
  // action 函数 用来发出 mutations，函数的第一个参数是 context，我们需要 context 对象下的 commit 方法来发出 mutation，action和mutation函数名相同也没问题,只有 action 函数内能执行异步操作(ajax)
  actions: {
    // add(context){
    //   context.commit('add')
    // }
    add({ commit }, n) {
      commit('add', n)
    }
  }
})

export default store
