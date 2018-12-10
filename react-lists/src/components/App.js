import React, { Component } from 'react'

class App extends Component {
  state = {
    comments: [
      {
        id: 1,
        txt: 'hahaha'
      }
    ]
  }
  render() {
    // 尽量不要在 return 函数内 写太多 js 操作
    // return 内就是负责展示的，逻辑操作最好在 return 之外
    const { comments } = this.state
    //没有评论的时候展示某个div，有评论的时候展示评论列表
    const showDiv = comments.length ? <div>展示列表</div> : <div>请评论</div>

    return (
      <div>
        <h1>文章</h1>
        <p>asdg asjkdg kasjgd aksjdg ka</p>
        <h4>回复</h4>
        {showDiv}
      </div>
    )
  }
}

export default App
