import React, { Component } from 'react'
import shortId from 'shortid'
class App extends Component {
  state = {
    comments: [
      {
        id: '12312',
        txt: 'hahaha'
      },
      {
        id: '12112',
        txt: 'hahaha1'
      },
      {
        id: '31232',
        txt: 'hahaha2'
      }
    ],
    val: ''
  }
  render() {
    // 尽量不要在 return 函数内 写太多 js 操作
    // return 内就是负责展示的，逻辑操作最好在 return 之外
    const { comments, val } = this.state

    //没有评论的时候展示某个div，有评论的时候展示评论列表
    // 列表渲染 只需要将对象数组变成标签数组
    //  map 将一个数组生成一个新数组  map 参数内的返回值就是新数组中的元素
    //  通过标签数组生成的元素 必须要给每一个元素加上属性 key 并且属性值是唯一的 通常 key 的值是数据的 id 值
    // 不变性
    // 直接 comments.reverse  comments 本身也会颠倒顺序，间接的修改了 state 违背了不变性。
    // 数组的 复制   slice(0)      Object.assign      ...

    const showDiv = comments.length ? (
      <ul>
        {[...comments].reverse().map(comment => (
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
      <div>请评论</div>
    )
    console.log(comments)
    return (
      <div>
        <h1>文章</h1>
        <p>asdg asjkdg kasjgd aksjdg ka</p>
        <textarea
          value={val}
          onChange={this.handleChange}
          onKeyDown={this.handleEnter}
        />
        <button onClick={this.addComment}>评论</button>
        <h4>回复</h4>
        {showDiv}
      </div>
    )
  }
  addComment = () => {
    const { comments, val } = this.state
    // 将该条评论更新到页面上,并且清空评论内容
    // 当输入的是有效字符的时候 才能评论
    if (val.trim()) {
      const newComment = {
        id: shortId(),
        txt: val
      }
      this.setState({
        comments: [...comments, newComment],
        val: ''
      })
    } else {
      alert('请输入有效字符')
    }
  }
  delComment = id => {
    // splice     filter
    const { comments } = this.state
    this.setState({
      comments: comments.filter(comment => comment.id !== id)
    })
  }
  handleChange = event => {
    // 事件对象   只有事件函数的第一个参数指的是事件函数，事件函数指的是直接给事件赋值的那个函数
    this.setState({
      val: event.target.value
    })
  }
  handleEnter = event => {
    if (event.keyCode === 13) {
      this.addComment()
    }
  }
}

export default App
