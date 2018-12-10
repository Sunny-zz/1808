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
  render() {
    // 由于return内使用了多次 this.state.ind
    const { ind } = this.state
    return (
      <div className="show">
        <img src={pic1} alt="" className={`${ind === 0 && 'active'}`} />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
        <ul className="list">
          <li
            onClick={() => {
              this.change(0)
            }}
            style={{ bgckgroundColor: ind === 0 ? 'red' : '#fff' }}
          />
          <li
            onClick={() => {
              this.change(1)
            }}
            style={{ bgckgroundColor: ind === 1 ? 'red' : '#fff' }}
          />
          <li
            onClick={() => {
              this.change(2)
            }}
            style={{ bgckgroundColor: ind === 2 ? 'red' : '#fff' }}
          />
          <li
            onClick={() => {
              this.change(3)
            }}
            style={{ bgckgroundColor: ind === 3 ? 'red' : '#fff' }}
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
