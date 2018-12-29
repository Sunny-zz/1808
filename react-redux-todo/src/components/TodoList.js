import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    const { todos } = this.props
    console.log(todos)

    const todoList = todos.length ? (
      <ul>
        {todos.map(e => (
          <li key={e.id}>{e.txt}</li>
        ))}
      </ul>
    ) : (
      <div>请添加 todo</div>
    )
    return todoList
  }
}

export default TodoList
