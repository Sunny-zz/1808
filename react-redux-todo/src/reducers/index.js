import todos from './todos'
import filter from './filter'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos,
  filter
})
export default rootReducer
