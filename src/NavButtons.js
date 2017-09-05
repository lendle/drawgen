import React from 'react'
import { Navbar, ButtonGroup, Button, FormGroup, Glyphicon } from 'react-bootstrap'

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


    const seedStr = seed ? seed : ""

    const catSeedStr = (category == null ? "" : category + "/") + seedStr

    const refreshButton = (event && category && seed) ?
      <LinkContainer to ={`/drawgen/${event}/${category}/${nextSeed(seed)}`}>
        <Button><Glyphicon glyph="refresh"/></Button>
      </LinkContainer> :
      <Button disabled ><Glyphicon glyph="refresh"/></Button>

    return (
      <div>
          <Navbar.Form>
            <FormGroup>
              <ButtonGroup size = "sm" navItem>
                <LinkContainer to ={`/drawgen/vfs/${catSeedStr}`} exact><Button>VFS</Button></LinkContainer>
                <LinkContainer to ={`/drawgen/mfs/${catSeedStr}`} exact><Button>MFS</Button></LinkContainer>
              </ButtonGroup>
            </FormGroup>{' '}
            <FormGroup>
              <ButtonGroup size = "sm" navItem>
                  <LinkContainer to ={`/drawgen/${event}/open/${seedStr}`} exact><Button>Open</Button></LinkContainer>
                  <LinkContainer to ={`/drawgen/${event}/advanced/${seedStr}`} exact><Button>Advanced</Button></LinkContainer>
                </ButtonGroup>
            </FormGroup>

      {' '}
            <FormGroup>
            {refreshButton}
            </FormGroup>
          </Navbar.Form>

      </div>
    )

  }
}

export default NavButtons;
