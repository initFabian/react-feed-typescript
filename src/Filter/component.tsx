import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'

interface FilterComponentProps extends FilterStore {
  onUpdateFilter(type: 'All' | 'Text' | 'Video' | 'Image'): void
}

export default (props: FilterComponentProps) => {
  const filterHandler = (type: 'All' | 'Text' | 'Video' | 'Image') => {
    props.onUpdateFilter(type)
  }

  // This is perfect for an enum
  return (
    <Row style={{ textAlign: 'center' }}>
      <Col xs={12}>
        <Tabs
          id="FilterTabs"
          activeKey={props.filter}
          onSelect={filterHandler.bind(this)}
        >
          <Tab eventKey={'All'} title="All" />
          <Tab eventKey={'Text'} title="Text" />
          <Tab eventKey={'Image'} title="Images" />
          <Tab eventKey={'Video'} title="Videos" />
        </Tabs>
      </Col>
    </Row>
  )
}
