import React from 'react'
import ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap'

export default (props) => {
  const removeErrorClick = () => {
    props.onClearError(props.error.id)
  }

  return (
    <Row style={{ marginLeft: 10 }}>
      <Col xs={7} style={{ color: 'red' }}>
        {props.error.message}
      </Col>
      <Col xs={1}>
        <a href="#" onClick={removeErrorClick.bind(this)}>
          <span className="glyphicon glyphicon-remove" />
        </a>
      </Col>
    </Row>
  )
}
