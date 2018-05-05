import { connect, Dispatch } from 'react-redux'
import { clearError } from './actions'
import ErrorListComponent from './component'

interface ErrorItem {
  id: string
  message: string
}

interface ErrorListState {
  errors: ErrorItem[]
}

const mapStateToProps = (state: ErrorListState) => ({
  errors: state.errors
})

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  onClearError(id: string) {
    dispatch(clearError(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorListComponent)
