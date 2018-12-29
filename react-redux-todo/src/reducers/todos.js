import { GET_TODOS } from '../constants/actionTypes'
const todos = (state = [], action) => {
  const { type } = action
  switch (type) {
    case GET_TODOS:
      return action.todos
    default:
      return state
  }
}
export default todos
