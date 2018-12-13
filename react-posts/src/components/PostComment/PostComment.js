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
        <button>评论</button>
        {commentDiv}
      </div>
    )
  }
  handleComment = event => {
    this.setState({
      comment: event.target.value
    })
  }
}

export default PostComment
