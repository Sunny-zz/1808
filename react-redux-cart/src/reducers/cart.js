const cart = (
  state = {
    productId: ['165ffhg7'],
    quantityById: { '165ffhg7': 1 }
  },
  action
) => {
  const { type } = action
  switch (type) {
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
