import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Activities from '../Activities/Activities'
import Events from '../Events/Events'
import './main.css'
import Post from '../Post/Post'
class Main extends Component {
  render() {
    return (
      <div className="main">
        {/* 写在 Switch 组件内的路由 Route 只能匹配一个 */}
        <Switch>
          <Route component={Activities} path="/activities" />
          <Route component={Events} path="/events" />
          <Route component={Post} path="/post/:id" />
          <Route component={Home} path="/" />
        </Switch>
      </div>
    )
  }
}

export default Main
