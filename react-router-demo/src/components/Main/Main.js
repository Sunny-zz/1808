import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import Activities from '../Activities/Activities'
import Events from '../Events/Events'
import './main.css'
import Post from '../Post/Post'
import Where from '../Where/Where'
class Main extends Component {
  render() {
    return (
      <div className="main">
        {/* 写在 Switch 组件内的路由 Route 只能匹配一个 */}
        <Switch>
          <Route component={Activities} path="/activities" />
          <Route component={Events} path="/events" />
          <Route component={Post} path="/post/:id" />
          <Route component={Where} path="/404" />
          <Route
            path="/*"
            // render 属性属性值是一个函数该函数的返回值必须是一个组件，作为路由组件相当于 component，该函数默认接受一个参数，参数就是 路由传递的 props
            render={props => {
              const { pathname } = props.location
              if (pathname === '/' || pathname.indexOf('welcome') !== -1) {
                return <Home />
              } else {
                // 当页面的url没有正常的页面匹配的时候 返回一个 Redirect，
                // to 指向 /404 那么就会展示 Where 组件
                return <Redirect from="/*" to="/404" />
              }
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default Main
