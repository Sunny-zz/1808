import React, { Component } from 'react'
import axios from 'axios'
class Posts extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    // 该生命周期函数 用于刷新页面发送请求获取数据更改 state
    axios
      .get('http://localhost:3008/posts')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { posts } = this.state
    const list = posts.length ? (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href="#">{post.title}</a>
          </li>
        ))}
      </ul>
    ) : (
      <div>请稍等.....</div>
    )
    return <div>{list}</div>
  }
}

export default Posts
