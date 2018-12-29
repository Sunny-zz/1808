import { CHANGE_TYPE } from '../constants/actionTypes'
const filter = (state = 'all', action) => {
  const { type } = action
  switch (type) {
    case CHANGE_TYPE:
      return action.newType
    default:
      return state
  }
}
export default filter
