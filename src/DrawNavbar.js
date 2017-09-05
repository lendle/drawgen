import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

import NavButtons from './NavButtons'

class DrawNavbar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Draw generator
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Switch>
          <Route path="/drawgen/:event/:category/:seed" component = {NavButtons}/>
          <Route path="/drawgen/:event/" component = {NavButtons}/>
          <Route component = {NavButtons}/>
          </Switch>
        </Navbar.Collapse>
      </Navbar>

        )
      }
    }

    export default DrawNavbar;
