// action 的创建函数            创建 action 的函数
import axios from 'axios'
export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}
// export const getPosts = posts => {
//   return {
//     type: 'GET_POSTS',
//     posts
//   }
// }
export const getPosts = () => {
  return dispatch => {
    axios.get('http://localhost:3008/posts').then(res => {
      dispatch({
        type: 'GET_POSTS',
        posts: res.data
      })
    })
  }
}
export const getComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}
// 不在组件内直接执行 异步请求 发 action
// 把 异步请求封装到 action 内
// 需要 redux 中间件 redux-promise redux-thunk redux-saga
export const delComment = id => {
  return {
    type: 'DEL_COMMENT',
    id
  }
}
