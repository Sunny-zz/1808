import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <span>0 item left</span>
        <span
          onClick={() => {
            this.changeType('all')
          }}
          style={{ marginLeft: '30px' }}
        >
          all
        </span>
        <span
          onClick={() => {
            this.changeType('active')
          }}
          style={{ marginLeft: '30px' }}
        >
          active
        </span>
        <span
          onClick={() => {
            this.changeType('completed')
          }}
          style={{ marginLeft: '30px' }}
        >
          completed
        </span>
        <span style={{ marginLeft: '30px' }}>clear completed </span>
      </div>
    )
  }
  changeType = type => {
    const { changeType } = this.props
    changeType(type)
  }
}

export default Footer
