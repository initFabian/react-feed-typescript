export default {
  ADD_POST: 'ADD_POST',
  LIKE_POST: 'LIKE_POST',
  REMOVE_POST: 'REMOVE_POST',
  FILTER_POSTS: 'FILTER_POSTS',
  ADD_ERROR: 'ADD_ERROR',
  REMOVE_ERROR: 'REMOVE_ERROR'
}

export const UUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}
