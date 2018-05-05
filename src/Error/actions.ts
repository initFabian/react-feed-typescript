export const addError = (message: string): AddErrorAction => ({
  type: TypeKeys.ADD_ERROR,
  payload: message
})

export const clearError = (id: UUID): RemoveErrorAction => ({
  type: TypeKeys.REMOVE_ERROR,
  payload: id
})
