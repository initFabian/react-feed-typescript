export default (state: PostType = PostType.All, action: FeedActions): PostType => {
  switch (action.type) {
    case TypeKeys.FILTER_POSTS:
      return action.payload
    default:
      return state
  }
}
