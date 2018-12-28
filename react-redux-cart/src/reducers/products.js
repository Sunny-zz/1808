import { GET_PRODUCTS, ADD_TO_CART, SUB_PRODUCT_QUANTITY } from '../constants/'
const products = (state = [], action) => {
  const { type } = action
  switch (type) {
    case GET_PRODUCTS:
      return action.products
    case ADD_TO_CART:
      const newState = [...state]
      newState.find(e => e.id === action.id).inventory--
      return newState
    case SUB_PRODUCT_QUANTITY:
      return state.map(e => {
        if (e.id === action.id) {
          e.inventory++
        }
        return e
      })
    default:
      return state
  }
}

export default products
