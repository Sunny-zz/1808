// 函数式组件  没有自己的 state
import React from 'react'
import Todo from '../components/Todo'
import { connect } from 'react-redux'
import { getTodos } from '../actions/'
// 函数式组件的 props 如何接收
// 函数的第一个参数就是 组件的props
const TodoContainer = props => <Todo {...props} />
const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

export default connect(
  mapStateToProps,
  { getTodos }
)(TodoContainer)
