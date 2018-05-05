import * as C from '../constants'

const newPost = ({ title, type, body }: PostInterface) => {
  return {
    id: C.UUID(),
    title,
    type,
    body,
    liked: false
  }
}

export default (state: Post[] = [], action: FeedActions): Post[] => {
  switch (action.type) {
    case TypeKeys.ADD_POST:
      return [newPost(action.payload), ...state]

    case TypeKeys.LIKE_POST:
      return state.map((post) => {
        if (post.id != action.payload) return post

        return Object.assign({}, post, {
          liked: !post.liked
        })
      })

    case TypeKeys.REMOVE_POST:
      return state.filter((post) => post.id !== action.payload)
    default:
      return state
  }
}
