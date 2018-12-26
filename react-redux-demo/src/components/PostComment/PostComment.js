import React, { Component } from 'react'

class PostComment extends Component {
  render() {
    const { comments } = this.props
    console.log(comments)

    const content = (
      <ul>
        {comments.map(e => (
          <li key={e.id}>{e.txt}</li>
        ))}
      </ul>
    )
    return <div>{content}</div>
  }
}

export default PostComment
