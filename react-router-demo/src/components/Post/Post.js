import React, { Component } from 'react'
import Layout from '../Layout/Layout'

class Post extends Component {
  render() {
    const { id } = this.props.match.params
    return (
      <Layout className="post">
        <h1>文章标题</h1>
        <span>文章 id: {id}</span>
      </Layout>
    )
  }
}

export default Post
