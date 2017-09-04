import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Route } from 'react-router-dom'

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
          <Route path="/drawgen/:event/:category/:seed" component = {NavButtons}/>
        </Navbar.Collapse>
      </Navbar>

        )
      }
    }

    export default DrawNavbar;
