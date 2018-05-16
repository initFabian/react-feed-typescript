export const addPost = ({ title, type, body }: IPostInterface): IAddPostAction => ({
  type: TypeKeys.ADD_POST,
  payload: {
    title,
    type,
    body
  }
})
