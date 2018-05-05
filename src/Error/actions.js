import C from '../constants'

export const addError = (message) => ({
  type: C.ADD_ERROR,
  payload: message
})

export const clearError = (id) => ({
  type: C.REMOVE_ERROR,
  payload: id
})
