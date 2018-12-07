import React, { Component } from 'react'

class App extends Component {
  // 相当于给该类(组件)定义了一个属性 state 属性值为对象
  state = {
    // 各种状态
    num: 1
  }
  render() {
    return (
      <>
        <span>{this.state.num}</span>
        <button onClick={this.fun}>+</button>
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
}

export default App
