import { connect } from 'react-redux'
import { likePost, removePost } from './actions'
import FeedListComponent from './component'

const mapStateToProps = (state, props) => {
  if (state.filter === 'all') {
    return state
  }

  const { posts } = state
  return {
    posts: posts.filter((post) => post.type === state.filter)
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemovePost(id) {
    dispatch(removePost(id))
  },
  onPostLike(id) {
    console.log(`updating post with id: ${id}`)
    dispatch(likePost(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedListComponent)
