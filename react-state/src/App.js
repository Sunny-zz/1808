import React, { Component } from 'react'
import './app.css'
class App extends Component {
  // 相当于给该类(组件)定义了一个属性 state 属性值为对象
  state = {
    // 各种状态
    num: 1,
    bg: true,
    show: false
  }
  render() {
    // 当修改了 state 时 render 会重新执行,只会重新渲染跟改变的 state 相关的 html
    // 在 render 方法下可以查看最新的 state
    // console.log(this.state.show)
    return (
      <>
        <span>{this.state.num}</span>
        <button onClick={this.fun}>+</button>
        <div
          // className={this.state.bg ? 'box active' : 'box'}
          className={`box ${this.state.bg && 'active'}`}
          // style={{
          //   width: '200px',
          //   height: '200px',
          //   backgroundColor: this.state.bg ? 'pink' : 'teal'
          // }}
        />
        <button className="btn" onClick={this.changeBg}>
          change
        </button>
        <button
          className="modal-btn"
          onClick={() => {
            this.changeModal(true)
          }}
        >
          Modal
        </button>
        <div
          className="modal-wrap"
          style={{ display: this.state.show ? 'block' : 'none' }}
          onClick={() => {
            this.changeModal(false)
          }}
        />
        <div
          className="modal"
          style={{ display: this.state.show ? 'block' : 'none' }}
        >
          <button
            className="cancle"
            onClick={() => {
              this.changeModal(false)
            }}
          >
            取消
          </button>
        </div>
      </>
    )
  }
  fun = () => {
    console.log(1)
    // 修改 state
    // 我们在组件的函数内想要使用组件内的 this 需要将函数定义成箭头函数
    // 修改组件的 state 必须使用 setState 方法 该方法是组件的默认方法
    // 该方法如何使用--> 传递一个对象参数里面写要修改的某个状态的属性
    // 不可以直接对 state 进行修改
    this.setState({
      num: this.state.num + 1
    })
  }
  changeBg = () => {
    // const oldColor = this.state.color
    // if (oldColor === 'pink') {
    //   this.setState({
    //     color: 'teal'
    //   })
    // } else {
    //   this.setState({
    //     color: 'pink'
    //   })
    // }
    this.setState({
      bg: !this.state.bg
    })
  }
  // showModal = () => {
  //   this.setState({
  //     show: true
  //   })
  // }
  // closeModal = () => {
  //   this.setState({
  //     show: false
  //   })
  // }
  changeModal = isShow => {
    console.log(this.state.show)
    this.setState({
      show: isShow
    })
  }
}

export default App
