export const filterPosts = (
  filterType: 'All' | 'Text' | 'Video' | 'Image'
): FilterFeedAction => ({
  type: TypeKeys.FILTER_POSTS,
  payload: filterType
})
