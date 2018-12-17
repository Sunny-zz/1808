import React, { Component } from 'react'

class Todo extends Component {
  state = {
    txt: ''
  }
  render() {
    const { todos, completeTodo } = this.props
    const { txt } = this.state
    const todoList = todos.length ? (
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => {
              completeTodo(todo.id)
            }}
          >
            {todo.todo}
          </li>
        ))}
      </ul>
    ) : (
      ''
    )
    return (
      <div>
        <input type="text" value={txt} onChange={this.handleInput} />
        <button onClick={this.addTodo}>addTodo</button>
        {todoList}
      </div>
    )
  }
  handleInput = event => {
    this.setState({
      txt: event.target.value
    })
  }
  addTodo = () => {
    const { txt } = this.state
    const { addTodo } = this.props
    if (txt.trim()) {
      const newTodo = {
        todo: txt,
        completed: false
      }
      addTodo(newTodo)
      this.setState({
        txt: ''
      })
    }
  }
}

export default Todo
