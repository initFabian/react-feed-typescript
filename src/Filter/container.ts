import { connect, Dispatch } from 'react-redux'
import { filterPosts } from './actions'
import FilterComponent from './component'

interface IMapStateToProps extends IFilterStore {}

const mapStateToProps = (state: IMapStateToProps): IMapStateToProps => ({
  filter: state.filter || 'All'
})

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onUpdateFilter(filter: PostType) {
    dispatch(filterPosts(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
