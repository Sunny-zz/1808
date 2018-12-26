// const initialState = []
import posts from './posts'
import comments from './comments'
import { combineReducers } from 'redux'
// combineReducers 函数需要传递一个参数，该参数作为最终存储到 store 中的数据
// 将该函数的返回值 传递给 createStore 就会创建 store 了

const rootReducer = combineReducers({
  posts,
  comments
})
export default rootReducer
