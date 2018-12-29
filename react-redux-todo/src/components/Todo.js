import React, { Component } from 'react'
import Input from './Input'
import TodoList from './TodoList'
import Footer from './Footer'

class Todo extends Component {
  componentDidMount() {
    console.log(this.props.getTodos)

    this.props.getTodos()
  }
  render() {
    const { todos, getTodos } = this.props
    console.log(this.props)

    return (
      <div>
        <Input />
        <TodoList todos={todos} />
        <Footer />
      </div>
    )
  }
}

export default Todo
