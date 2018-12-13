import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { post } = this.props
    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    )
  }
}

export default PostBody
