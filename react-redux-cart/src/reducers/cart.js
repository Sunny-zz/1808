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
    case 'CHECKOUT_CART':
      return {
        productId: [],
        quantityById: {}
      }
    case 'SUB_PRODUCT_QUANTITY':
      const newCart = { ...state }
      // 看当前购物车中的商品个数

      if (newCart.quantityById[action.id] > 1) {
        // 当前商品个数减 1
        newCart.quantityById[action.id]--
      } else {
        // 删除 productId 内的对应商品 id
        newCart.productId.splice(newCart.productId.indexOf(action.id), 1)
        // 删除 quantityById 内的 对应属性
        // const obj = { a: 10, b: 20 }
        // delete obj.a
        // console.log(obj);   // {b:20}
        delete newCart.quantityById[action.id]
      }
      return newCart
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
