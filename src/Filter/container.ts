import { connect, Dispatch } from 'react-redux'
import { filterPosts } from './actions'
import FilterComponent from './component'

interface MapStateToProps extends FilterStore {}

const mapStateToProps = (state: MapStateToProps): MapStateToProps => ({
  filter: state.filter || 'All'
})

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onUpdateFilter(filter: 'All' | 'Text' | 'Video' | 'Image') {
    dispatch(filterPosts(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
