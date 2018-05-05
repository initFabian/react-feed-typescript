import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, Store } from 'redux'

const consoleMessages = (store: any) => (next: any) => (action: any) => {
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

export default (initialState: { errors: ErrorItem[] }): Store<StateStore> => {
  return createStore<StateStore>(
    appReducer,
    initialState,
    applyMiddleware(thunk, consoleMessages)
  )
}
