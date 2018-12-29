import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <span>0 item left</span>
        <span style={{ marginLeft: '30px' }}>all</span>
        <span style={{ marginLeft: '30px' }}>active</span>
        <span style={{ marginLeft: '30px' }}>completed</span>
        <span style={{ marginLeft: '30px' }}>clear completed </span>
      </div>
    )
  }
}

export default Footer
