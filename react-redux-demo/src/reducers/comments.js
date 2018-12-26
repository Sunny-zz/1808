const comments = (state = [], action) => {
  // 修改 state 的方法 相关 action 的一些事
  // state 永远是最新的
  switch (action.type) {
    case 'GET_COMMENTS':
      return action.comments
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}

export default comments
