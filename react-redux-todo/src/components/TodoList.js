import React, { Component } from 'react'
import { filterTodos } from '../selectors'
class TodoList extends Component {
  render() {
    const { todos, filter } = this.props

    const todoList = todos.length ? (
      <ul>
        {filterTodos(todos, filter).map(e => (
          <li
            onClick={() => {
              this.completeTodo(e.id, e.isCompleted)
            }}
            style={{ textDecoration: e.isCompleted ? 'line-through' : 'none' }}
            key={e.id}
          >
            {e.txt}
          </li>
        ))}
      </ul>
    ) : (
      <div>请添加 todo</div>
    )
    return todoList
  }
  completeTodo = (id, isCompleted) => {
    const newIsCompleted = {
      isCompleted: !isCompleted
    }
    const { completeTodo } = this.props
    completeTodo(id, newIsCompleted)
  }
}

export default TodoList
