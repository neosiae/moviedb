import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import MovieDB from './reducers'
import Container from './pages/container'
import Home from './pages/home'
import Movie from './pages/movie'
import Tv from './pages/tv'

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  MovieDB,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
)

export default function App () {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/movie/:movieId' component={Movie} />
          <Route path='/tv/:tvId' component={Tv} />
        </Container>
      </Router>
    </Provider>
  )
}
