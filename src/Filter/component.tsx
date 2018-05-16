import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Row, Col, Tab, Tabs } from 'react-bootstrap'

interface IFilterComponentProps extends IFilterStore {
  onUpdateFilter(type: PostType): void
}

export default (props: IFilterComponentProps) => {
  const filterHandler = (type: PostType) => {
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
          <Tab eventKey={PostType.All} title="All" />
          <Tab eventKey={PostType.Text} title="Text" />
          <Tab eventKey={PostType.Image} title="Images" />
          <Tab eventKey={PostType.Video} title="Videos" />
        </Tabs>
      </Col>
    </Row>
  )
}
