import { GET_TODOS, ADD_TODO, COMPLETE_TODO } from '../constants/actionTypes'
const todos = (state = [], action) => {
  const { type } = action
  switch (type) {
    case GET_TODOS:
      return action.todos
    case ADD_TODO:
      return [...state, action.newTodo]
    case COMPLETE_TODO:
      return state.map(e => {
        if (e.id === action.id) {
          e.isCompleted = !e.isCompleted
        }
        return e
      })
    default:
      return state
  }
}
export default todos
