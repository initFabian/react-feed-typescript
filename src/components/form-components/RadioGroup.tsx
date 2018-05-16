import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToggleButtonGroup, ControlLabel, Radio, FormGroup, Col } from 'react-bootstrap'

interface IRadioGroupProps {
  defaultValue: PostType.Text
  changeHandler(value: PostType): void
}

export default (props: IRadioGroupProps) => {
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
          <Radio name="radioGroup" value={PostType.Text} inline>
            Text
          </Radio>{' '}
          <Radio name="radioGroup" value={PostType.Image} inline>
            Image Link
          </Radio>{' '}
          <Radio name="radioGroup" value={PostType.Video} inline>
            Video Link
          </Radio>
        </ToggleButtonGroup>
      </Col>
    </FormGroup>
  )
}
