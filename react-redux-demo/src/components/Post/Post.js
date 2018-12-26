import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostBody from '../PostBody/PostBody'
import PostComment from '../PostComment/PostComment'
import axios from 'axios'
import store from '../../store/'
class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
      store.dispatch({ type: 'GET_COMMENTS', comments: res.data })
    })
  }

  render() {
    const { posts, match, comments } = this.props
    const { id } = match.params
    const post = posts.find(e => e.id.toString() === id)
    const article = post ? (
      <div>
        <PostBody post={post} />
        <PostComment comments={comments} id={id} />
      </div>
    ) : (
      '请稍等'
    )

    return <div>{article}</div>
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Post)
