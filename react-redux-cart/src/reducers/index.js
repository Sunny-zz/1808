import products from './products'
import cart from './cart'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  products,
  cart
})

export default rootReducer
