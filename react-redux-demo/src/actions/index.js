// action 的创建函数            创建 action 的函数
export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}
