import { combineReducers } from 'redux'
import feedReducer from '../Feed/reducer'
import filterReducer from '../Filter/reducer'
import errorsReducer from '../Error/reducer'

export default combineReducers({
  filter: filterReducer,
  posts: feedReducer,
  errors: errorsReducer
})
