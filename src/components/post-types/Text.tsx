import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Col } from 'react-bootstrap'

export default (props: PostProps) => (
  <Col xs={12}>
    <p>{props.body}</p>
  </Col>
)
