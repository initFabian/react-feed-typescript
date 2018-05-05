import C, { UUID } from '../constants'

const newError = (message, id) => ({
  id: UUID(),
  message
})

export default (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, newError(action.payload, state.length)]
    case C.REMOVE_ERROR:
      return state.filter((e) => e.id !== action.payload)
    default:
      return state
  }
}
