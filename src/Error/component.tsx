import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import ErrorItem from '../components/shared/ErrorItem'

interface ErrorItem {
  id: string
  message: string
}

interface ErrorComponentProps {
  onClearError(id: string): void
  errors: ErrorItem[]
}

export default (props: ErrorComponentProps) => {
  const removeErrorWithId = (id: string) => {
    props.onClearError(id)
  }

  const errorList = props.errors.map((errObj) => {
    console.log(errObj)
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
