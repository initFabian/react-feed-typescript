import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ControlLabel, FormGroup, Col } from 'react-bootstrap'

interface ITextFieldProps {
  fieldLabel: string
  placeholder: string
  bindingRef: React.Ref<HTMLInputElement>
}

export default (props: ITextFieldProps) => {
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
