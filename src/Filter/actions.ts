export const filterPosts = (filterType: PostType): FilterFeedAction => ({
  type: TypeKeys.FILTER_POSTS,
  payload: filterType
})
