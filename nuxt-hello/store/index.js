import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 普通模式
// const store = () =>
//   new Vuex.Store({
//     state: {
//       counter: 0
//     },
//     mutations: {
//       getCounter(state, newCounter) {
//         state.counter = newCounter
//       }
//     },
//     actions: {
//       // 如果 action 函数是异步的可以使用 async  await
//       async getCounter({ commit }) {
//         //  因为 @nuxtjs/axios 已经被加到了 nuxt 配置项的 modules 项内，那么就相当于加到了整个 vue 对象下可以使用 this.$axios 访问
//         const res = await this.$axios.get('http://localhost:3008/data')
//         commit('getCounter', res.data.counter)
//       }
//       // getCounter({ commit }) {
//       //   this.$axios.get('http://localhost:3008/data').then(res => {
//       //     commit('getCounter', res.data.counter)
//       //   })
//       // }
//     }
//   })

// export default store
// 模块模式创建 store
// 直接导出 state muations actions getters
export const state = () => ({
  counter: 20
})
export const mutations = {
  getCounter(state, newCounter) {
    state.counter = newCounter
  }
}
export const actions = {
  async getCounter({ commit }) {
    const res = await this.$axios.get('http://localhost:3008/data')
    commit('getCounter', res.data.counter)
  }
}
