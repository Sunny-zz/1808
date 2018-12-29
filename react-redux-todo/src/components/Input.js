import React, { Component } from 'react'

class Input extends Component {
  state = {
    todo: ''
  }
  render() {
    const { todo } = this.state
    return (
      <div>
        <input
          type='text'
          value={todo}
          onChange={e =>
            this.setState({
              state: e.target.value
            })
          }
        />
        <button>添加 todo</button>
      </div>
    )
  }
}

export default Input
