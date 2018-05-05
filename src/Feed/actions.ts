export const likePost = (id: UUID): LikePostAction => ({
  type: TypeKeys.LIKE_POST,
  payload: id
})

export const removePost = (id: UUID): RemovePostAction => ({
  type: TypeKeys.REMOVE_POST,
  payload: id
})
