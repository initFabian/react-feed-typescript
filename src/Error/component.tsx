import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import ErrorItem from '../components/shared/ErrorItem'

interface IErrorComponentProps extends IErrorStore {
  onClearError(id: UUID): void
}

export default (props: IErrorComponentProps) => {
  const removeErrorWithId = (id: UUID) => {
    props.onClearError(id)
  }

  const errorList = props.errors.map((errObj) => {
    return (
      <ErrorItem
        key={errObj.id}
        error={errObj}
        onClearError={removeErrorWithId.bind(this)}
      />
    )
  })

  return <Row>{errorList}</Row>
}
