// reducer 函数 功能
// 1. 定义初始数据
// 2. 定义修改数据的方法  根据不同的 action 类型 定义 state 的修改方案
// 3. 提供给 createStore 创建 store
const initialState = []
// 修改 store
// 通过 dispatch 发出 action  ， reducer 接收 action 根据action 类型修改 store

// rootReducer 里面的 action 参数当 dispatch 方法执行的时候，action 就指的是 dispatch 方法的参数
//
const rootReducer = (state = initialState, action) => {
  // 修改 state 的方法 相关 action 的一些事
  switch (action.type) {
    case 'GET_POSTS':
      return action.posts
    default:
      return state
  }
}

export default rootReducer
