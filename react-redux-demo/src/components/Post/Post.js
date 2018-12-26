import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostBody from '../PostBody/PostBody'
import PostComment from '../PostComment/PostComment'
import axios from 'axios'
import store from '../../store/'
import { addComment } from '../../actions'
class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
      store.dispatch({ type: 'GET_COMMENTS', comments: res.data })
    })
  }

  render() {
    const { posts, match, comments, addComment } = this.props

    const { id } = match.params
    const post = posts.find(e => e.id.toString() === id)
    const article = post ? (
      <div>
        <PostBody post={post} />
        <PostComment comments={comments} id={id} addComment={addComment} />
      </div>
    ) : (
      '请稍等'
    )

    return <div>{article}</div>
  }
}

const mapStateToProps = state => {
  console.log(state)

  return {
    posts: state.posts,
    comments: state.comments
  }
}

// 将子组件要发的 action 函数添加上 dispatch 功能，
// 1.为什么在这添加？ 因为只有直接和 store 交互的组件才能获取 store 的 dispatch
// 2.为什么要添加？因为每次子组件更新 store 的时候都需要引入 store 使用他的 dispatch 才能发 action
// 3.怎么添加通过 mapDispatchToProps 将action创建函数添加上dispatch
// 例子给 addComment 函数添加 dispatch， 写法如下
//  addComment 中就会带 dispatch 功能将该方法传递给子组件执行就会自动发出对应的 action
const mapDispatchToProps = {
  addComment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
