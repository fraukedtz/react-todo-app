import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Home'
import Config from './Config'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;

  nav {
    display: flex;
  }

  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    width: 100%;
    background: #efefef;
    &:first-child {
      border-right: 1px solid white;
    }

    &.active {
      background: teal;
      color: white;
    }
  }
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route path="/config/" component={Config} />
          <nav>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/config/">
              Config
            </NavLink>
          </nav>
        </Wrapper>
      </Router>
    )
  }
}
