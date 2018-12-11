import React, { Component } from 'react'

class Form extends Component {
  render() {
    // 非受控组件
    return (
      <div>
        <label htmlFor="email">邮箱：</label>
        <input
          type="text"
          id="email"
          ref={inp => {
            this.inp = inp
          }}
        />
        <button onClick={this.handleClick}>提交</button>
      </div>
    )
  }
  handleClick = () => {
    // 获取真实 dom 节点
    // react 提供了 获取真实 dom 节点的方案  refs
    // 获取 input(#email) 的真实 dom 节点，给该元素加上 ref 属性，属性值为一个函数(必须是 es6的箭头函数)，该函数默认接受一个参数(第一个参数),该参数代表的是该元素的真实 dom 节点。我们自定义一个全局变量 将该真实 dom 节点赋值给这个变量，那么以后我们使用该全局变量就相当于这个 dom 节点了
    // refs 不仅可以获取真实的 dom 节点也可以获取组件
    // const email = document.querySelector('#email').value
    alert(this.inp.value)
  }
}

export default Form
