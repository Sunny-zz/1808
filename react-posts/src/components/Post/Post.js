import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    const { match } = this.props
    const id = match.params.id
    // 就可以通过 id 去服务器获取对应的文章内容了
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      setTimeout(() => {
        this.setState({
          post: res.data
        })
      }, 1000)
    })
  }
  render() {
    const { post } = this.state
    // '' ""  0  undefined  null NaN
    const showDiv = post ? (
      <article>
        <h1>{post.title}</h1>
        <p>文章内容</p>
      </article>
    ) : (
      <div>请稍等。。。</div>
    )
    return (
      <div>
        <Link to="/">返回首页</Link>
        <button onClick={this.back}>返回</button>
        {showDiv}
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
