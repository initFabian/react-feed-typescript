export const likePost = (id: UUID): ILikePostAction => ({
  type: TypeKeys.LIKE_POST,
  payload: id
})

export const removePost = (id: UUID): IRemovePostAction => ({
  type: TypeKeys.REMOVE_POST,
  payload: id
})
