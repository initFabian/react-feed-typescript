import C from '../constants'

export const addError = (message: string): ErrorAction => ({
  type: C.ADD_ERROR,
  payload: message
})

export const clearError = (id: string): ErrorAction => ({
  type: C.REMOVE_ERROR,
  payload: id
})
