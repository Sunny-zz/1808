import React, { Component } from 'react'

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
    ]
  }
  render() {
    // 尽量不要在 return 函数内 写太多 js 操作
    // return 内就是负责展示的，逻辑操作最好在 return 之外
    const { comments } = this.state
    //没有评论的时候展示某个div，有评论的时候展示评论列表
    // 列表渲染 只需要将对象数组变成标签数组
    //  map 将一个数组生成一个新数组  map 参数内的返回值就是新数组中的元素
    //  通过标签数组生成的元素 必须要给每一个元素加上属性 key 并且属性值是唯一的 通常 key 的值是数据的 id 值
    const showDiv = comments.length ? (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.txt}</li>
        ))}
      </ul>
    ) : (
      <div>请评论</div>
    )

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
