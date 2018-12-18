import React, { Component } from 'react'

class Todo extends Component {
  state = {
    txt: ''
  }
  render() {
    const { todos, completeTodo, type, delTodo } = this.props
    const { txt } = this.state
    // const showTodos = todos.filter(todo => {
    //   if (type === 'all') {
    //     return true
    //   } else if (type === 'active') {
    //     return !todo.completed
    //   } else {
    //     return todo.completed
    //   }
    // })
    const showTodos = todos.filter(todo =>
      type === 'all'
        ? true
        : type === 'active'
        ? !todo.completed
        : todo.completed
    )
    const todoList = showTodos.length ? (
      <ul>
        {showTodos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <span
              onClick={() => {
                completeTodo(todo.id)
              }}
            >
              {todo.todo}
            </span>
            <button
              onClick={() => {
                delTodo(todo.id)
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    ) : (
      ''
    )
    return (
      <div>
        <input type='text' value={txt} onChange={this.handleInput} />
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
    console.log(this)
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
