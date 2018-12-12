import React, { Component } from 'react'
import Button from './Button/Button'
import SubNav from './SubNav/SubNav'
import '../static/gloable.css'
import Main from './Main/Main'
class App extends Component {
  state = {
    show: false
  }
  render() {
    const { show } = this.state
    return (
      <div className="app" onClick={this.changeHide}>
        <Button changeShow={this.changeShow} show={show} />
        <SubNav show={show} />
        <Main show={show} />
      </div>
    )
  }
  changeShow = () => {
    this.setState({
      show: true
    })
  }
  changeHide = event => {
    const eleClassName = event.target.className
    // 1. 给 app 绑定点击事件 只要点击的 不是 button 按钮就隐藏
    // 2. 给 sub-nav 绑定点击事件，作用是阻止 app 的点击事件触发,由于 sub-nav 里面的内容很多，通过event.target.className 无法判断是否点击的是 sub-nav 或者是里面的内容
    if (eleClassName !== 'btn') {
      this.setState({
        show: false
      })
    }
  }
}

export default App
