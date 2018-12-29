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
              todo: e.target.value
            })
          }
        />
        <button onClick={this.addTodo}>添加 todo</button>
      </div>
    )
  }
  addTodo = () => {
    const { todo } = this.state
    if (todo.trim()) {
      const { addTodo } = this.props
      const newTodo = {
        txt: todo,
        isCompleted: false
      }
      addTodo(newTodo, () => {
        this.setState({ todo: '' })
      })
    }
  }
}

export default Input
