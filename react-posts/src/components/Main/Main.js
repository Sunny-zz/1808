import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Posts from '../Posts/Posts'
import Post from '../Post/Post'
class Main extends Component {
  render() {
    return (
      <div>
        <Route component={Posts} path="/" exact />
        {/* 动态路由 多个地址指向同一个路由  将改变的地方设置为动态参数   :id   下面离子的意思是   只要满足  /post/字符  就会匹配到 Post 组件*/}
        <Route component={Post} path="/post/:id" />
      </div>
    )
  }
}

export default Main
