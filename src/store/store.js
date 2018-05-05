import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = (store) => (next) => (action) => {
  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('posts', store.getState().posts.length)
  result = next(action)

  let { posts, errors } = store.getState()

  console.log(`
    posts: ${JSON.stringify(posts)}
    errors: ${errors}
  `)

  console.groupEnd()

  return result
}

export default (initialState = {}) => {
  const middleware = applyMiddleware(thunk, consoleMessages)
  return middleware(createStore)(appReducer, initialState)
}
