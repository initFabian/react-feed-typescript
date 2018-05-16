import { combineReducers } from 'redux'
import feedReducer from '../Feed/reducer'
import filterReducer from '../Filter/reducer'
import errorsReducer from '../Error/reducer'

export default combineReducers<IStateStore>({
  filter: filterReducer,
  feed: feedReducer,
  errors: errorsReducer
})
