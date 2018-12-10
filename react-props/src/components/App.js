import React, { Component } from 'react'
import '../static/gloable.css'
import Button from './Button/Button'
import Card from './Card/Card'
import pic from '../img/1.png'
class App extends Component {
  render() {
    // 当父组件内部想要使用多个相同子组件的时候，而每个子组件大部分一样只有以下部分不同，此时这些不同的地方我们需要父组件告知子组件要变成什么样。
    // 父组件向子组件 传递信息 这个信息就是 props
    // 父组件使用子组件的时候在 jsx 标签内写属性就相当于传递 props
    // 例如: <Button txt='哈哈'/> 相当于父组件给子组件传递了一个 txt 属性 属性值为 ‘哈哈’
    return (
      <div>
        <h1>hello props</h1>
        <Button txt="登录" bgColor="blue" onClick={this.clickLogin} />
        <Button txt="注册" onClick={this.clickSignUp} />
        <Card
          imgSrc={pic}
          title="Europe Street beat"
          pra="www.instagram.com"
          cardWidth="300px"
        />
        <Card imgSrc={pic} />
      </div>
    )
  }
  clickLogin = () => {
    alert('登录')
  }
  clickSignUp = () => {
    alert('注册')
  }
}
export default App
