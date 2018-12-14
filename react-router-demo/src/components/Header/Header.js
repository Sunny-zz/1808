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
            <NavLink activeClassName="active1" to="/" exact>
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
}

export default Header
