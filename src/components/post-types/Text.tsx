import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Col } from 'react-bootstrap'

export default (props: IPostProps) => (
  <Col xs={12}>
    <p>{props.body}</p>
  </Col>
)
