import { connect } from 'react-redux'
import { clearError } from './actions'
import ErrorListComponent from './component'

const mapStateToProps = (state, props) => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch) => ({
  onClearError(id) {
    dispatch(clearError(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorListComponent)
