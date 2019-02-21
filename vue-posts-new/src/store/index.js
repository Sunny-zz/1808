import Vue from 'vue'
import Vuex from 'vuex'
import posts from './posts'
import comments from './comments'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 在非发布环境下启用严格模式
  strict: process.env.NODE_ENV !== 'production',
  //  state 数据
  // state: {
  //   // count: 10
  //   comments: []
  // },
  // 不管是哪一个模块的action或mutation 都是全局的。
  modules: {
    posts,
    comments
  },
  // mutation 函数 提供修改 state 的方法，函数的第一个参数就是 state
  mutations: {
    // 给 count + n
    // add(state, n) {
    //   state.count += n
    // }
  },
  // action 函数 用来发出 mutations，函数的第一个参数是 context，我们需要 context 对象下的 commit 方法来发出 mutation，action和mutation函数名相同也没问题,只有 action 函数内能执行异步操作(ajax)
  actions: {
    // add(context,n){
    //   context.commit('add',n)
    // }
    // add({ commit }, n) {
    //   commit('add', n)
    // }
  }
})

//组件(dispatch)---> action(commit) ---->mutation---->state
export default store
