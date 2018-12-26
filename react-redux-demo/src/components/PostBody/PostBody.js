import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { post } = this.props
    return (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    )
  }
}

export default PostBody
