import C from '../constants'

export const addPost = ({ title, type, body }) => ({
  type: C.ADD_POST,
  payload: {
    title,
    type,
    body
  }
})
