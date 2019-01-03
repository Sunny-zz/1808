import { combineReducers } from 'redux'
import goods from './goods'
import cart from './cart'
const rootReducer = combineReducers({
  goods,
  cart
})
export default rootReducer
