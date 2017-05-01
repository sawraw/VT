import { combineReducers } from 'redux'
import productBuilderReducer from './productBuilder'

const rootReducer = combineReducers({
  productBuilder: productBuilderReducer
})

export default rootReducer
