import React from 'react'
import ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap'
import ErrorItem from '../components/shared/ErrorItem'

export default (props) => {
  const removeErrorWithId = (id) => {
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
