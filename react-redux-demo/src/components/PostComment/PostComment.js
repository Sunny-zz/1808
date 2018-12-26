import React, { Component } from 'react'
import axios from 'axios'
import store from '../../store'
class PostComment extends Component {
  state = {
    comment: ''
  }
  render() {
    const { comment } = this.state
    const { comments } = this.props
    console.log(comments)

    const content = comments.length ? (
      <ul>
        {comments.map(e => (
          <li key={e.id}>{e.txt}</li>
        ))}
      </ul>
    ) : (
      <div>请添加评论</div>
    )
    return (
      <div>
        <h3>评论</h3>
        <textarea value={comment} onChange={this.handleArea} />
        <button onClick={this.addComment}>评论</button>
        {content}
      </div>
    )
  }
  handleArea = e => {
    this.setState({
      comment: e.target.value
    })
  }

  addComment = () => {
    const { comment } = this.state
    const { id } = this.props

    const newComment = {
      txt: comment,
      postId: id
    }
    axios.post('http://localhost:3008/comments', newComment).then(res => {
      // 更新 store 内 comments 的内容
      store.dispatch({ type: 'ADD_COMMENT', comment: res.data })
      this.setState({
        comment: ''
      })
    })
  }
}

export default PostComment
