import axios from 'axios'
import * as actionTypes from '../constants'
// * as actionTypes 将 constants 内导出的所有东西全部放到 actionTypes 对象内
console.log(actionTypes)

export const getProducts = () => {
  return dispatch => {
    axios.get('http://localhost:3008/products').then(res => {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        products: res.data
      })
    })
  }
}
export const addToCart = (id, newInventory) => {
  return dispatch => {
    axios
      .patch(`http://localhost:3008/products/${id}`, newInventory)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_TO_CART,
          id
        })
      })
  }
}

export const checkoutCart = () => {
  return {
    type: actionTypes.CHECKOUT_CART
  }
}

export const subProductQuantity = (id, newInventory) => {
  return dispatch => {
    axios
      .patch(`http://localhost:3008/products/${id}`, newInventory)
      .then(() => {
        dispatch({
          type: actionTypes.SUB_PRODUCT_QUANTITY,
          id
        })
      })
  }
}
