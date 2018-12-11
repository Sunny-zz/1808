import React, { Component } from 'react'
import './subnav.css'
class SubNav extends Component {
  render() {
    return (
      <div className="sub-nav">
        <h2>我的博客</h2>
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a href="#">个人作品</a>
          </li>
          <li>
            <a href="#">个人简历</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SubNav
