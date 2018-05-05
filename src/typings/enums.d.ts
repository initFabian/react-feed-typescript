declare global {
  const enum TypeKeys {
    ADD_POST = 'ADD_POST',
    LIKE_POST = 'LIKE_POST',
    REMOVE_POST = 'REMOVE_POST',
    FILTER_POSTS = 'FILTER_POSTS',
    ADD_ERROR = 'ADD_ERROR',
    REMOVE_ERROR = 'REMOVE_ERROR',
    OTHER_ACTION = '__any_other_action_type__'
  }
}
export {}
