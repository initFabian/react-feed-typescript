import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, Store } from 'redux'

const consoleMessages = (store: any) => (next: any) => (action: any) => {
  let result

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log('feed', store.getState().feed.length)
  result = next(action)

  let { feed, errors } = store.getState()

  console.log(`
    feed: ${JSON.stringify(feed)}
    errors: ${errors}
  `)

  console.groupEnd()

  return result
}

export default (initialState: StateStore) => {
  return createStore<StateStore>(
    appReducer,
    initialState,
    applyMiddleware(thunk, consoleMessages)
  )
}
