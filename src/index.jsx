import React from 'react'
import ReactDOM from 'react-dom'
import storeFactory from './store/store'
import { addError } from './Error/actions'
import { Provider } from 'react-redux'
import App from './App'

const initialState = localStorage['redux-store']
  ? JSON.parse(localStorage['redux-store'])
  : {
      filter: 'all',
      posts: [],
      errors: []
    }

const saveState = () => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
}

const handleError = (error) => {
  store.dispatch(addError(error.message))
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store

window.addEventListener('error', handleError)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
