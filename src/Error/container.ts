import { connect, Dispatch } from 'react-redux'
import { clearError } from './actions'
import { filterPosts } from '../Filter/actions'
import ErrorListComponent from './component'

const mapStateToProps = (state: ErrorStore) => ({
  errors: state.errors
})

interface DispatchToProps {
  onClearError(id: UUID): void
}

const mapDispatchToProps = (dispatch: Dispatch<ErrorActions>): DispatchToProps => ({
  onClearError(id: UUID): void {
    dispatch(clearError(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorListComponent)
