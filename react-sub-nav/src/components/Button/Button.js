import React, { Component } from 'react'
import './button.css'
class Button extends Component {
  render() {
    const { changeShow, show } = this.props
    return (
      <button
        className="btn"
        onClick={changeShow}
        style={{ marginLeft: show ? '260px' : '0px' }}
      >
        侧边栏
      </button>
    )
  }
}

export default Button
