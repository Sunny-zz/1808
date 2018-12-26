// reducer 函数 功能
// 1. 定义初始数据
// 2. 定义修改数据的方法  根据不同的 action 类型 定义 state 的修改方案
// 3. 提供给 createStore 创建 store

// 修改 store
// 通过 dispatch 发出 action  ， reducer 接收 action 根据action 类型修改 store

// rootReducer 里面的 action 参数当 dispatch 方法执行的时候，action 就指的是 dispatch 方法的参数
//

import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'

// combineReducers 的返回值就相当于之前定义的函数
// combineReducers 函数要传递一个对象， createStore 会将该对象存储 store 中
const rootReducer = combineReducers({
  posts,
  comments
})
export default rootReducer
