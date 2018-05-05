import * as C from '../constants'

const newError = (message: string): ErrorItem => ({
  id: C.UUID(),
  message
})

export default (state: ErrorItem[] = [], action: ErrorActions): ErrorItem[] => {
  switch (action.type) {
    case TypeKeys.ADD_ERROR:
      return [...state, newError(action.payload)]
    case TypeKeys.REMOVE_ERROR:
      return state.filter((e) => e.id !== action.payload)
    default:
      return state
  }
}
