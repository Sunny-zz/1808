// action 的创建函数            创建 action 的函数
export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}
export const getPosts = posts => {
  return {
    type: 'GET_POSTS',
    posts
  }
}
export const getComments = comments => {
  return {
    type: 'GET_COMMENTS',
    comments
  }
}
export const delComment = id => {
  return {
    type: 'DEL_COMMENT',
    id
  }
}
