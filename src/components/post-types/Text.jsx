import React from 'react'
import ReactDOM from 'react-dom'
import { Col } from 'react-bootstrap'

export default (props) => (
  <Col xs={12}>
    <p>{props.body}</p>
  </Col>
)
