const products = (state = [], action) => {
  const { type } = action
  switch (type) {
    case 'GET_PRODUCTS':
      return action.products
    case 'ADD_TO_CART':
      const newState = [...state]
      newState.find(e => e.id === action.id).inventory--
      return newState
    default:
      return state
  }
}

export default products
