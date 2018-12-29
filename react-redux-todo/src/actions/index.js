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
