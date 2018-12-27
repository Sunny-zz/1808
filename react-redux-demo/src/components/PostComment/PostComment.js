import React, { Component } from 'react'
import axios from 'axios'
class PostComment extends Component {
  state = {
    comment: ''
  }
  render() {
    const { comment } = this.state
    const { comments } = this.props
    console.log(comments)

    const content = comments.length ? (
      <ul>
        {comments.map(e => (
          <li key={e.id}>
            {e.txt}
            <button
              onClick={() => {
                this.delComment(e.id)
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <div>请添加评论</div>
    )
    return (
      <div>
        <h3>评论</h3>
        <textarea value={comment} onChange={this.handleArea} />
        <button onClick={this.addComment}>评论</button>
        {content}
      </div>
    )
  }
  handleArea = e => {
    this.setState({
      comment: e.target.value
    })
  }

  addComment = () => {
    const { comment } = this.state
    const { id, addComment } = this.props

    const newComment = {
      txt: comment,
      postId: id
    }
    // 更新 store 内 comments 的内容
    // store.dispatch({ type: 'ADD_COMMENT', comment: res.data })
    addComment(newComment, () => {
      this.setState({
        comment: ''
      })
    })
  }
  delComment = id => {
    // 1.实现网上的删除，数据库中的数据删除
    // 2.网上的实现了之后才能操作本地的 store,本地操作实现有两种方案
    // a. 直接对本地数据进行修改(能用就用)
    // b. 重新请求网络的数据更新本地

    const { delComment } = this.props
    delComment(id)
  }
}

export default PostComment
