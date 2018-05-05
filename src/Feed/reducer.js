import C, { UUID } from '../constants'

const newPost = ({ title, type, body }, id) => {
  return {
    id: UUID(),
    title,
    type,
    body,
    liked: false
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case C.ADD_POST:
      return [newPost(action.payload, state.length), ...state]
    case C.LIKE_POST:
      return state.map((post) => {
        if (post.id != action.payload) {
          return post
        }

        return Object.assign({}, post, {
          liked: !post.liked
        })
      })

    case C.REMOVE_POST:
      return state.filter((post) => post.id !== action.payload)
    default:
      return state
  }
}
