import C from '../constants'

export default (state = 'all', action) => {
  switch (action.type) {
    case C.FILTER_POSTS:
      return action.payload
    default:
      return state
  }
}
