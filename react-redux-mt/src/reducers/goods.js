import { GET_GOODS } from '../constants/actionTypes'
const goods = (state = [], action) => {
  const { type } = action
  switch (type) {
    case GET_GOODS:
      return action.goods
    default:
      return state
  }
}
export default goods
