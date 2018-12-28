export const isCartEmpty = (cart, products) => {
  return cart.productId.length && products.length
}

export const getTotal = (cart, products) => {
  return isCartEmpty(cart, products)
    ? cart.productId.reduce(
        (num, e) =>
          num + products.find(i => i.id === e).price * cart.quantityById[e],
        0
      )
    : 0
}
