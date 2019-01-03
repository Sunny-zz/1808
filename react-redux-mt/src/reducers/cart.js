import { ADD_TO_CART } from '../constants/actionTypes'
const cart = (state = { foodsId: [], quantityById: {} }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 必须按照不变性原则
      // Object.assign
      const { id } = action
      const newState = { ...state }
      if (newState.foodsId.indexOf(id) === -1) {
        newState.foodsId.push(id)
      } else {
        newState.quantityById[id]++
      }
      return newState
    default:
      return state
  }
}

export default cart
