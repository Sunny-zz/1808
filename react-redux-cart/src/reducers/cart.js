const cart = (
  state = {
    productId: [],
    quantityById: {}
  },
  action
) => {
  const { type } = action
  switch (type) {
    case 'ADD_TO_CART':
      const { id } = action
      const newState = { ...state }
      if (newState.productId.indexOf(id) === -1) {
        // 购物车中没有该商品
        newState.productId.push(id)
        newState.quantityById[id] = 1
      } else {
        // 购物车中有该商品
        newState.quantityById[id]++
      }
      return newState
    default:
      return state
  }
}
export default cart
// const pro = [
//   { id: 'wqesa', productName: 'iphone xx' },
//   { id: 'wqes1a', productName: 'iphone xx1' }
// ]
// const cart = {
//   proId: ['wqesa', 'wqes1a'],
//   numById: {
//     wqesa: 1,
//     wqes1a: 2
//   }
// }
