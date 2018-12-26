import React, { Component } from 'react'

class PostBody extends Component {
  render() {
    const { post } = this.props
    return (
      <div>
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      </div>
    )
  }
}

export default PostBody
