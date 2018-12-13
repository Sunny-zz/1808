import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Post extends Component {
  componentDidMount() {
    const { match } = this.props
    const id = match.params.id
    // 就可以通过 id 去服务器获取对应的文章内容了
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      console.log(res.data)
    })
  }
  render() {
    return (
      <div>
        <Link to="/">返回首页</Link>
        <button onClick={this.back}>返回</button>
        <article>
          <h1>文章标题</h1>
          <p>文章内容</p>
        </article>
      </div>
    )
  }
  back = () => {
    // 被当做路由组件的 react 组件默认会被传递一些 props
    // props 内有三个对象  history   location    match
    console.log(this.props)
    this.props.history.goBack()
    // 相当于页面跳转 作用相当于 Link
    // this.props.history.push('/')
  }
}

export default Post
