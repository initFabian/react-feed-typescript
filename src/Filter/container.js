import { connect } from 'react-redux'
import { filterPosts } from './actions'
import FilterComponent from './component'

const mapStateToProps = (state, props) => ({
  filter: state.filter || 'all'
})

const mapDispatchToProps = (dispatch) => ({
  onUpdateFilter(filter) {
    dispatch(filterPosts(filter))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
