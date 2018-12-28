import axios from 'axios'

export const getProducts = () => {
  return dispatch => {
    axios.get('http://localhost:3008/products').then(res => {
      dispatch({
        type: 'GET_PRODUCTS',
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
          type: 'ADD_TO_CART',
          id
        })
      })
  }
}

export const checkoutCart = () => {
  return {
    type: 'CHECKOUT_CART'
  }
}

export const subProductQuantity = id => {
  return {
    type: 'SUB_PRODUCT_QUANTITY',
    id
  }
}
