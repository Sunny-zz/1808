import React, { Component } from 'react'
import './main.css'
class Main extends Component {
  render() {
    const { show } = this.props
    return (
      <div className="main" style={{ marginLeft: show ? '260px' : '0px' }}>
        main
      </div>
    )
  }
}

export default Main
