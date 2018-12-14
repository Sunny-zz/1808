import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { post, num } = this.props
    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <span>{num} 评论</span>
      </article>
    )
  }
}

export default PostBody
