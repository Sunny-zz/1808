import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './header.css'
class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img
              src="http://img3.imgtn.bdimg.com/it/u=4119463086,3077206957&fm=26&gp=0.jpg"
              alt=""
            />
          </Link>
        </div>
        <ul className="nav">
          <li>
            {/* 当该NavLink 的to属性的属性值和页面的路径匹配的时候 active 样式就会生效 */}
            <NavLink activeClassName="active1" to="/" isActive={this.active}>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active1" to="/activities">
              动态
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active1" to="/events">
              活动
            </NavLink>
          </li>
        </ul>
      </header>
    )
  }
  active = (...rest) => {
    // 看页面的 url 如果满足条件就返回 true 首页导航就会变色了
    // rest 全部的实参集合 数组   rest[1] 第二个参数 ---> location
    const { pathname } = rest[1]
    //   /     /welcome/frontend    /welcome/backend
    if (pathname === '/' || pathname.indexOf('welcome') !== -1) {
      return true
    } else {
      return false
    }
  }
}

export default Header
