import C from '../constants'

export const filterPosts = (value) => ({
  type: C.FILTER_POSTS,
  payload: value
})
