import React, { Component } from 'react'
import axios from 'axios'
class PostComment extends Component {
  state = {
    comment: ''
  }
  render() {
    const { comments } = this.props
    const { comment } = this.state
    const commentDiv = comments.length ? (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.txt}
            <button
              onClick={() => {
                this.delComment(comment.id)
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
        <textarea value={comment} onChange={this.handleComment} />
        <button onClick={this.addComment}>评论</button>
        {commentDiv}
      </div>
    )
  }
  handleComment = event => {
    this.setState({
      comment: event.target.value
    })
  }
  addComment = () => {
    // 如果输入的不是有效字符不能评论
    const { comment } = this.state
    const { addComment, id } = this.props
    if (comment.trim()) {
      // 添加评论  执行父组件传递过来的方法
      // 由于新的评论需要当前文章的 id 所以需要父组件把 id 传递过来
      const newComment = {
        txt: comment,
        postId: id
      }
      // 将新的评论上传到网上 发 axios post 请求 ,附带参数 txt  postId ,id参数不需要 ,请求成功之后会返回新的评论对象
      axios.post('http://localhost:3008/comments', newComment).then(res => {
        // 网上更新完毕之后 要更新本地的 state
        // 如何更新本地的state  1.执行父组件的方法2.重新发送 ajax请求获取，
        // 通常都是用第一种方法
        addComment(res.data)
        this.setState({
          comment: ''
        })
      })
      // 1.将评论个数展示到 PostBody
      // 2.添加删除评论按钮
      // 如何删除  发 delete 请求 `http://localhost:3008/comments/:id`请求成功之后 返回一个 {success:true}
    }
  }
  delComment = id => {
    const { delComment } = this.props
    axios.delete(`http://localhost:3008/comments/${id}`).then(res => {
      delComment(id)
    })
  }
}

export default PostComment
