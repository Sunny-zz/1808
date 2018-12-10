import React, { Component } from 'react'
import './loop.css'
import pic1 from '../../img/1.jpg'
import pic2 from '../../img/2.jpg'
import pic3 from '../../img/3.jpg'
import pic4 from '../../img/4.jpg'
class Loop extends Component {
  state = {
    ind: 0
  }

  componentDidMount() {
    // 可以允许修改 state
    // 因为 cdm 是首次渲染到页面才执行，只执行一次，那么获取 ind 就一直是 0
    // 我们想要在 class 内创建一个全局的变量 直接可以给 this 添加属性
    this.run = setInterval(() => {
      this.autoPlay()
    }, 1000)
  }
  render() {
    // 由于return内使用了多次 this.state.ind
    // 将刷新页面上来就执行的 setInterval 写到生命周期函数中   cdm  componentDidMount(组件初次渲染完毕)
    // console.log('render ')
    const { ind } = this.state
    // console.log(ind)
    return (
      <div
        className="show"
        onMouseEnter={() => {
          clearInterval(this.run)
        }}
        onMouseLeave={() => {
          this.run = setInterval(() => {
            this.autoPlay()
          }, 1000)
        }}
      >
        <img src={pic1} alt="" className={`${ind === 0 && 'active'}`} />
        <img src={pic2} alt="" className={`${ind === 1 && 'active'}`} />
        <img src={pic3} alt="" className={`${ind === 2 && 'active'}`} />
        <img src={pic4} alt="" className={`${ind === 3 && 'active'}`} />
        <ul className="list">
          <li
            onClick={() => {
              this.change(0)
            }}
            style={{ backgroundColor: ind === 0 ? 'red' : '#fff' }}
          />
          <li
            onClick={() => {
              this.change(1)
            }}
            style={{ backgroundColor: ind === 1 ? 'red' : '#fff' }}
          />
          <li
            onClick={() => {
              this.change(2)
            }}
            style={{ backgroundColor: ind === 2 ? 'red' : '#fff' }}
          />
          <li
            onClick={() => {
              this.change(3)
            }}
            style={{ backgroundColor: ind === 3 ? 'red' : '#fff' }}
          />
        </ul>
      </div>
    )
  }

  change = newInd => {
    // 获取真实的 dom 节点   回流 或 重绘
    // 修改 state
    this.setState({
      ind: newInd
    })
  }
  autoPlay = () => {
    const { ind } = this.state
    this.setState({
      ind: ind === 3 ? 0 : ind + 1
    })
  }
  // change2 = ()=>{
  //   // 获取真实的 dom 节点   回流 或 重绘
  //   // 修改 state
  //   this.setState({
  //     ind:1
  //   })
  // }
  // change3 = ()=>{
  //   // 获取真实的 dom 节点   回流 或 重绘
  //   // 修改 state
  //   this.setState({
  //     ind:2
  //   })
  // }
  // change4 = ()=>{
  //   // 获取真实的 dom 节点   回流 或 重绘
  //   // 修改 state
  //   this.setState({
  //     ind:3
  //   })
  // }
}

export default Loop
