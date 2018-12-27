import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import looger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(looger, thunk))
export default store
