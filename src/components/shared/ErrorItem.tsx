import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Col, Row } from 'react-bootstrap'

interface IErrorItemProps {
  error: IErrorItem
  onClearError(id: UUID): void
}

export default (props: IErrorItemProps) => {
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
