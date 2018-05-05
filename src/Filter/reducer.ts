export default (
  state: 'All' | 'Text' | 'Video' | 'Image' = 'All',
  action: FeedActions
): 'All' | 'Text' | 'Video' | 'Image' => {
  switch (action.type) {
    case TypeKeys.FILTER_POSTS:
      return action.payload
    default:
      return state
  }
}
