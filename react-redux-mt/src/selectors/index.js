export const getTopArr = goods => {
  const arr = goods.map((e, index) => {
    return document.querySelectorAll('.food-list>div')[index].offsetTop
  })
  return arr
}

export const getTotal = (goods, cart) => {
  // [{a:1,foods:[]},{a:2,foods:[]},{a:3,foods:[]}]
  // { id:[] ,idNum:{} }
  // 计算总价和总个数
  const allFoods = goods.reduce((arr, e) => [...arr, ...e.foods], [])
  const total = cart.foodsId.reduce((num, e) => {
    return num + allFoods.find(i => i.id === e).price * cart.quantityById[e]
  }, 0)

  return total
}
export const getAllNum = cart => {
  // [{a:1,foods:[]},{a:2,foods:[]},{a:3,foods:[]}]
  // { id:[] ,idNum:{} }
  // 计算总价和总个数
  const allNum = cart.foodsId.reduce((num, e) => {
    return num + cart.quantityById[e]
  }, 0)

  return allNum
}
