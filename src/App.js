import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

import {Table, Header, Footer, Body, Row, Cell, Column, Divider} from './Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          <Table>
            <Header>
              <Row>
                <Cell>Header: r1c1</Cell>
                <Cell>Header: r1c2</Cell>
              </Row>
              <Row>
                <Cell>Header: r2c1</Cell>
              </Row>
            </Header>
            <Body>
              <Column />
              <Divider />
              <Column />
            </Body>
            <Footer>
              <Row>
                <Cell>Footer: r1c1</Cell>
              </Row>
            </Footer>
          </Table>
        </div>
      </div>
    )
  }
}

export default App
