import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'

export default (props) => {
  const filterHandler = (id) => {
    props.onUpdateFilter(id)
  }

  return (
    <Row style={{ textAlign: 'center' }}>
      <Col xs={12}>
        <Tabs
          id="FilterTabs"
          activeKey={props.filter}
          onSelect={filterHandler.bind(this)}
        >
          <Tab eventKey={'all'} title="All" />
          <Tab eventKey={'text'} title="Text" />
          <Tab eventKey={'image'} title="Images" />
          <Tab eventKey={'video'} title="Videos" />
        </Tabs>
      </Col>
    </Row>
  )
}
