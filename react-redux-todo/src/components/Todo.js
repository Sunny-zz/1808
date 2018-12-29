import React, { Component } from 'react'
import Input from './Input'
import TodoList from './TodoList'
import Footer from './Footer'

class Todo extends Component {
  componentDidMount() {
    this.props.getTodos()
  }
  render() {
    const { todos, addTodo, completeTodo, filter, changeType } = this.props
    return (
      <div>
        <Input addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} filter={filter} />
        <Footer changeType={changeType} />
      </div>
    )
  }
}

export default Todo
