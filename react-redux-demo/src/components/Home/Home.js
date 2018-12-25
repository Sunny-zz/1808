import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store from '../../store'
class Home extends Component {
  // state = {
  //   posts: []
  // }
  // componentDidMount() {
  //   axios.get('http://localhost:3008/posts').then(res => {
  //     this.setState({
  //       posts: res.data
  //     })
  //   })
  // }

  render() {
    // 静态获取 store 中的数据 也就是说 store 中的数据变了 并不会重新获取
    const posts = store.getState()
    // console.log(a)
    // const { posts } = this.state
    const list = posts.length ? (
      <ul>
        {posts.map(e => (
          <li key={e.id}>
            <Link to={`/post/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <span>请稍等</span>
    )
    return <div>{list}</div>
  }
}

export default Home
