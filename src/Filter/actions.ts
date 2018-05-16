export const filterPosts = (filterType: PostType): IFilterFeedAction => ({
  type: TypeKeys.FILTER_POSTS,
  payload: filterType
})
