import { connect, Dispatch } from 'react-redux'
import { clearError } from './actions'
import ErrorListComponent from './component'

const mapStateToProps = (state: ErrorStore) => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onClearError(id: string) {
    dispatch(clearError(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorListComponent)
