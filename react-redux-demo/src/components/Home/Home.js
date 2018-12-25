import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store from '../../store'
class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('http://localhost:3008/posts').then(res => {
      this.setState({
        posts: res.data
      })
    })
  }

  render() {
    const a = store.getState()
    console.log(a)

    const { posts } = this.state
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
