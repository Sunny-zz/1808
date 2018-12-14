import React, { Component } from 'react'
import './layout.css'
class Layout extends Component {
  render() {
    // 新的 props   children
    // 写在 组件两个标签之内的 props 就是 children
    const { className, children } = this.props
    return <div className={`layout ${className}`}>{children}</div>
  }
}

export default Layout
Layout.defaultProps = {
  className: ''
}
