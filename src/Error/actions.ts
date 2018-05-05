import C from '../constants'

interface ErrorAction {
  type: string
  payload: string
}

export const addError = (message: string): ErrorAction => ({
  type: C.ADD_ERROR,
  payload: message
})

export const clearError = (id: string): ErrorAction => ({
  type: C.REMOVE_ERROR,
  payload: id
})
