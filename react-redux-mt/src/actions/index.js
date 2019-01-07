import * as actionTYpes from '../constants/actionTypes'
import axios from 'axios'
export const getGoods = () => dispatch => {
  axios
    .get(
      'https://raw.githubusercontent.com/Sunny-zz/1808/master/react-redux-mt/api/db.json'
    )
    .then(res => {
      dispatch({ type: actionTYpes.GET_GOODS, goods: res.data.goods })
    })
}

export const addToCart = id => ({
  type: actionTYpes.ADD_TO_CART,
  id
})
export const delToCart = id => ({
  type: actionTYpes.DEL_TO_CART,
  id
})
