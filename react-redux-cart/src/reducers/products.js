const products = (state = [], action) => {
  const { type } = action
  switch (type) {
    case 'GET_PRODUCTS':
      return action.products
    default:
      return state
  }
}

export default products
