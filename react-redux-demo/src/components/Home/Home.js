import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
    console.log(this.props)

    const { posts } = this.props
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
//  mapStateToProps 函数作用是 当该函数传递给 connect 方法的时候里面的参数 state 就会变成 store 中的数据,并且需要返回一个对象，把返回的对象转化为 props 传递给 connect 函数的第二次调用的参数 也就是 Home 组件，这样 Home 组件就可以动态获取 store 中的数据了
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Home)
