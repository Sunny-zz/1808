const posts = (state = [], action) => {
  // 修改 state 的方法 相关 action 的一些事
  switch (action.type) {
    case 'GET_POSTS':
      return action.posts
    default:
      return state
  }
}

export default posts
