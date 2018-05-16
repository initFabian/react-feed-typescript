import { connect, Dispatch } from 'react-redux'
import { clearError } from './actions'
import { filterPosts } from '../Filter/actions'
import ErrorListComponent from './component'

const mapStateToProps = (state: IErrorStore) => ({
  errors: state.errors
})

interface IDispatchToProps {
  onClearError(id: UUID): void
}

const mapDispatchToProps = (dispatch: Dispatch<ErrorActions>): IDispatchToProps => ({
  onClearError(id: UUID): void {
    dispatch(clearError(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorListComponent)
