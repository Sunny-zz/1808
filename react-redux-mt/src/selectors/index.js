export const getTopArr = goods => {
  const arr = goods.map((e, index) => {
    return document.querySelectorAll('.food-list>div')[index].offsetTop
  })
  return arr
}
