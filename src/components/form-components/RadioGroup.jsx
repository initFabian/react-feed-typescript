import React from 'react'
import ReactDOM from 'react-dom'
import { ToggleButtonGroup, ControlLabel, Radio, FormGroup, Col } from 'react-bootstrap'

export default (props) => {
  return (
    <FormGroup>
      <Col componentClass={ControlLabel} sm={3}>
        Type
      </Col>
      <Col sm={9}>
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue={props.defaultValue}
          onChange={props.changeHandler.bind(this)}
        >
          <Radio name="radioGroup" value={'text'} inline>
            Text
          </Radio>{' '}
          <Radio name="radioGroup" value={'image'} inline>
            Image Link
          </Radio>{' '}
          <Radio name="radioGroup" value={'video'} inline>
            Video Link
          </Radio>
        </ToggleButtonGroup>
      </Col>
    </FormGroup>
  )
}
