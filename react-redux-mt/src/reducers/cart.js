import { ADD_TO_CART, DEL_TO_CART } from '../constants/actionTypes'
const cart = (state = { foodsId: [], quantityById: {} }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 必须按照不变性原则
      // Object.assign
      const { id } = action
      const newState = { ...state }
      if (newState.foodsId.indexOf(id) === -1) {
        newState.foodsId.push(id)
        newState.quantityById[id] = 1
      } else {
        newState.quantityById[id]++
      }
      return newState

    case DEL_TO_CART:
      const newState1 = { ...state }
      if (newState1.quantityById[action.id] === 1) {
        delete newState1.quantityById[action.id]
        newState1.foodsId.splice(newState1.foodsId.indexOf(action.id), 1)
      } else {
        newState1.quantityById[action.id]--
      }
      return newState1
    default:
      return state
  }
}

export default cart
