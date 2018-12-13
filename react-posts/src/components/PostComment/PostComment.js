import React, { Component } from 'react'

class PostComment extends Component {
  state = {
    comment: ''
  }
  render() {
    const { comments } = this.props
    const commentDiv = comments.length ? (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.txt}</li>
        ))}
      </ul>
    ) : (
      <div>请添加评论</div>
    )
    return (
      <div>
        <h3>评论</h3>
        <textarea value={this.comment} onChange={this.handleComment} />
        <button onClick={this.addComment}>评论</button>
        {commentDiv}
      </div>
    )
  }
  handleComment = event => {
    this.setState({
      comment: event.target.value
    })
  }
  addComment = () => {
    // 如果输入的不是有效字符不能评论
    const { comment } = this.state
    const { addComment, id } = this.props
    if (comment.trim()) {
      // 添加评论  执行父组件传递过来的方法
      const newComment = {
        id: '23123s',
        txt: comment,
        postId: id
      }
      addComment(newComment)
    }
  }
}

export default PostComment
