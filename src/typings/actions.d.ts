declare global {
  interface AddErrorAction {
    type: TypeKeys.ADD_ERROR
    payload: string
  }

  interface RemoveErrorAction {
    type: TypeKeys.REMOVE_ERROR
    payload: UUID
  }

  interface AddPostAction {
    type: TypeKeys.ADD_POST
    payload: PostInterface
  }

  interface LikePostAction {
    type: TypeKeys.LIKE_POST
    payload: string
  }

  interface FilterFeedAction {
    type: TypeKeys.FILTER_POSTS
    payload: 'All' | 'Text' | 'Video' | 'Image'
  }

  interface RemovePostAction {
    type: TypeKeys.REMOVE_POST
    payload: UUID
  }

  interface OtherAction {
    type: TypeKeys.OTHER_ACTION
  }

  type ErrorActions = AddErrorAction | RemoveErrorAction | OtherAction
  type FeedActions =
    | FilterFeedAction
    | AddPostAction
    | LikePostAction
    | RemovePostAction
    | OtherAction
}
export {}
