import React from 'react'
import { Navbar, Nav,
  ButtonGroup, Button, FormGroup, ControlLabel, Glyphicon
} from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'


import seedrandom from 'seedrandom'

function nextSeed(seed) {
    if (/^\d+$/.test(seed)) {
      return Math.abs(seedrandom().int32())
    } else {
      return seed + "_"
    }
}

class NavButtons extends React.Component {
  render () {
    const { event, category, seed } = this.props.match.params

    return (
      <div>
          <Navbar.Form>
            <FormGroup>
              <ButtonGroup size = "sm" navItem>
                <LinkContainer to ={`/vfs/${category}/${seed}`} exact><Button>VFS</Button></LinkContainer>
                <LinkContainer to ={`/mfs/${category}/${seed}`} exact><Button>MFS</Button></LinkContainer>
              </ButtonGroup>
            </FormGroup>{' '}
            <FormGroup>
              <ButtonGroup size = "sm" navItem>
                  <LinkContainer to ={`/${event}/open/${seed}`} exact><Button>Open</Button></LinkContainer>
                  <LinkContainer to ={`/${event}/advanced/${seed}`} exact><Button>Advanced</Button></LinkContainer>
                </ButtonGroup>
            </FormGroup>

      {' '}
            <FormGroup>
              <LinkContainer to ={`/${event}/${category}/${nextSeed(seed)}`}>
              <Button><Glyphicon glyph="refresh"/></Button>
              </LinkContainer>
            </FormGroup>
          </Navbar.Form>

      </div>
    )

  }
}

export default NavButtons;
