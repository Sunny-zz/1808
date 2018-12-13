import React, { Component } from 'react'
import axios from 'axios'
import PostBody from '../PostBody/PostBody'
import PostComment from '../PostComment/PostComment'
class Post extends Component {
  state = {
    post: null,
    comments: []
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
    axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
      this.setState({
        comments: res.data
      })
    })
  }
  render() {
    const { post, comments } = this.state
    const { id } = this.props.match.params
    // '' ""  0  undefined  null NaN
    const showDiv = post ? (
      <div>
        <PostBody post={post} />
        <PostComment comments={comments} addComment={this.addComment} id={id} />
      </div>
    ) : (
      <div>
        <img
          style={{ width: '100%' }}
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544693249201&di=0daf0a08daf49843b76fdec4bb02bd00&imgtype=0&src=http%3A%2F%2Fimg.ui.cn%2Fdata%2Ffile%2F8%2F9%2F9%2F445998.gif%3FimageMogr2%2Fauto-orient%2Fstrip%2Fthumbnail%2F%25211800%253E"
          alt=""
        />
      </div>
    )
    return showDiv
  }
  back = () => {
    // 被当做路由组件的 react 组件默认会被传递一些 props
    // props 内有三个对象  history   location    match
    console.log(this.props)
    this.props.history.goBack()
    // 相当于页面跳转 作用相当于 Link
    // this.props.history.push('/')
  }
  addComment = newComment => {
    const { comments } = this.state
    this.setState({
      comments: [...comments, newComment]
    })
  }
}

export default Post
