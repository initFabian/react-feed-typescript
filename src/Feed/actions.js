import C from '../constants'

export const likePost = (id) => ({
  type: C.LIKE_POST,
  payload: id
})

export const removePost = (id) => ({
  type: C.REMOVE_POST,
  payload: id
})
