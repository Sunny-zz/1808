import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import Main from './Main/Main'
import store from '../store'
class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3008/posts').then(res => {
      // 将 res.data 更新到 store 中
      // 通过 store 的 dispatch 方法 发出 action,reducer 函数接收 action 并且修改 store 中的数据
      store.dispatch({ type: 'GET_POSTS', posts: res.data })
    })
  }

  render() {
    return (
      <Router>
        <>
          <header>
            <Link to='/'>首页</Link>
          </header>
          <Main />
        </>
      </Router>
    )
  }
}

export default App
