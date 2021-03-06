import { connect, Dispatch } from 'react-redux'
import { likePost, removePost } from './actions'
import FeedListComponent from './component'

interface IMapStateToProps extends IPostStore, IFilterStore {}

const mapStateToProps = (state: IMapStateToProps) => {
  if (state.filter === 'All') return state

  const { feed } = state
  return {
    feed: feed.filter((post) => post.type === state.filter)
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onRemovePost(id: UUID) {
    dispatch(removePost(id))
  },
  onPostLike(id: UUID) {
    console.log(`updating post with id: ${id}`)
    dispatch(likePost(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedListComponent)
