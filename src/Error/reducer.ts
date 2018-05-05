import C, { UUID } from '../constants'

const newError = (message: string): ErrorItem => ({
  id: UUID(),
  message
})

export default (state = [], action: ErrorAction) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, newError(action.payload)]
    case C.REMOVE_ERROR:
      return state.filter((e: ErrorItem) => e.id !== action.payload)
    default:
      return state
  }
}
