import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostBody from '../PostBody/PostBody'
import PostComment from '../PostComment/PostComment'

class Post extends Component {
  render() {
    const { posts, match } = this.props
    const { id } = match.params
    const post = posts.find(e => e.id.toString() === id)
    const article = post ? (
      <div>
        <PostBody />
        <PostComment />
      </div>
    ) : (
      '请稍等'
    )

    return <div>{article}</div>
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(Post)
