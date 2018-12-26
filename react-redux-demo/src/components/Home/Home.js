import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Home extends Component {
  render() {
    const { posts } = this.props
    const list = posts.length ? (
      <ul>
        {posts.map(e => (
          <li key={e.id}>
            <Link to={`/post/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <span>'请稍等'</span>
    )
    return <div>{list}</div>
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)
