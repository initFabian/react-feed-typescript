declare global {
  interface IAddErrorAction {
    type: TypeKeys.ADD_ERROR
    payload: string
  }

  interface IRemoveErrorAction {
    type: TypeKeys.REMOVE_ERROR
    payload: UUID
  }

  interface IAddPostAction {
    type: TypeKeys.ADD_POST
    payload: IPostInterface
  }

  interface ILikePostAction {
    type: TypeKeys.LIKE_POST
    payload: string
  }

  interface IFilterFeedAction {
    type: TypeKeys.FILTER_POSTS
    payload: PostType
  }

  interface IRemovePostAction {
    type: TypeKeys.REMOVE_POST
    payload: UUID
  }

  interface IOtherAction {
    type: TypeKeys.OTHER_ACTION
  }

  type ErrorActions = IAddErrorAction | IRemoveErrorAction | IOtherAction
  type FeedActions =
    | IFilterFeedAction
    | IAddPostAction
    | ILikePostAction
    | IRemovePostAction
    | IOtherAction
}
export {}
