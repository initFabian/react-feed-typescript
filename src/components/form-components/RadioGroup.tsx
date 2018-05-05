import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToggleButtonGroup, ControlLabel, Radio, FormGroup, Col } from 'react-bootstrap'

interface RadioGroupProps {
  defaultValue: 'Text'
  changeHandler(value: 'Text' | 'Video' | 'Image'): void
}

export default (props: RadioGroupProps) => {
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
          <Radio name="radioGroup" value={'Text'} inline>
            Text
          </Radio>{' '}
          <Radio name="radioGroup" value={'Image'} inline>
            Image Link
          </Radio>{' '}
          <Radio name="radioGroup" value={'Video'} inline>
            Video Link
          </Radio>
        </ToggleButtonGroup>
      </Col>
    </FormGroup>
  )
}
