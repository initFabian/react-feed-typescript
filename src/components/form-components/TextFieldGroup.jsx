import React from 'react'
import ReactDOM from 'react-dom'
import { ControlLabel, FormGroup, Col } from 'react-bootstrap'

export default (props) => {
  return (
    <FormGroup controlId="formHorizontalPost">
      <Col componentClass={ControlLabel} sm={3}>
        {props.fieldLabel}
      </Col>
      <Col sm={9}>
        <input
          className="form-control"
          type="text"
          placeholder={props.placeholder}
          ref={props.bindingRef}
        />
      </Col>
    </FormGroup>
  )
}
