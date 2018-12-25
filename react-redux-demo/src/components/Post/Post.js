import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      })
    })
  }

  render() {
    const { post } = this.state
    const article = post ? (
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    ) : (
      '请稍等'
    )

    return <div>{article}</div>
  }
}

export default Post
