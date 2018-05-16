export const addError = (message: string): IAddErrorAction => ({
  type: TypeKeys.ADD_ERROR,
  payload: message
})

export const clearError = (id: UUID): IRemoveErrorAction => ({
  type: TypeKeys.REMOVE_ERROR,
  payload: id
})
