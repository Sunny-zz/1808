import * as actionTypes from '../constants/actionTypes'
import axios from 'axios'
export const getTodos = () => dispatch => {
  axios.get('http://localhost:3008/todos').then(res => {
    dispatch({
      type: actionTypes.GET_TODOS,
      todos: res.data
    })
  })
}
export const addTodo = (newTodo, clearInput) => dispatch => {
  axios.post('http://localhost:3008/todos', newTodo).then(res => {
    clearInput()
    dispatch({
      type: actionTypes.ADD_TODO,
      newTodo: res.data
    })
  })
}
export const completeTodo = (id, newIsCompleted) => dispatch => {
  axios.patch(`http://localhost:3008/todos/${id}`, newIsCompleted).then(() => {
    dispatch({
      type: actionTypes.COMPLETE_TODO,
      id
    })
  })
}
export const changeType = type => {
  return {
    type: actionTypes.CHANGE_TYPE,
    newType: type
  }
}
axios.delete(`http://localhost:3008/todos?id=1`)
