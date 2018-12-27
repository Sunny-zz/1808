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
