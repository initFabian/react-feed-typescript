import * as React from 'react'
import * as ReactDOM from 'react-dom'
import HeaderContainer from './Header/container'
import FeedContainer from './Feed/container'
import ErrorContainer from './Error/container'
import { Row, Col, Grid, Navbar } from 'react-bootstrap'

export default () => (
  <Grid style={{ marginTop: 100, marginBottom: 100 }}>
    <Navbar
      fixedTop={true}
      className="react-demo-navbar"
      style={{ backgroundColor: '#0984e3' }}
    >
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React-TypeScript</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Row>
      <Col sm={6} smOffset={3} style={{ backgroundColor: '' }}>
        <HeaderContainer />
        <FeedContainer />
        <ErrorContainer />
      </Col>
    </Row>
  </Grid>
)
