import React, { Component } from 'react'

class Post extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <div>
        <h1>文章标题</h1>
        <span>文章 id: {id}</span>
      </div>
    )
  }
}

export default Post
