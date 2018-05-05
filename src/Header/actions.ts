export const addPost = ({ title, type, body }: PostInterface): AddPostAction => ({
  type: TypeKeys.ADD_POST,
  payload: {
    title,
    type,
    body
  }
})
