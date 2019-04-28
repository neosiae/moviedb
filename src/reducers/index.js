import { combineReducers } from 'redux'
import tabFilter from './tab'
import app from './app'

const MovieDB = combineReducers({
  tabFilter,
  app
})

export default MovieDB