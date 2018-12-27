const iniState = [
  {
    id: '165ffhg7',
    productName: '华为 v20',
    price: 5999,
    inventory: 10
  }
]

const products = (state = iniState, action) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}

export default products
