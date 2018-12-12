import React, { Component } from 'react'

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'react 基础'
      },
      {
        id: 2,
        title: 'vue 基础'
      }
    ]
  }
  render() {
    const { posts } = this.state
    const list = (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href="#">{post.title}</a>
          </li>
        ))}
      </ul>
    )
    return <div>{list}</div>
  }
}

export default Posts
