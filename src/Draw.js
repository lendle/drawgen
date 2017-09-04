import React from 'react'

import { ListGroupItem, ListGroup, Panel, Grid } from 'react-bootstrap'

import vfsPoints from './data/vfs.json'
import mfsPoints from './data/mfs.json'
import genDraw from './genDraw'

const draw2List = (draw, includeNames) => {
  return (
    <ListGroup fill>

      {draw.map((round, i) => {
        return <ListGroupItem key={i}><strong>Round {i+1}</strong>: {round.map(({id})=>id).join(',')}
          { includeNames &&
            <ListGroup>
              {round.map(({name}) => {
                return <ListGroupItem><small>{name}</small></ListGroupItem>
              })}
            </ListGroup>

          }
        </ListGroupItem>
      }
    )}
  </ListGroup>

)}

const drawConfig = {
  "mfs" : {
    "open" : {
      rounds : 8,
      minPoints : 4
    }
  },
  "vfs" : {
    "open" : {
      rounds: 10,
      minPoints: 5
    },
    "advanced" : {
      rounds: 10,
      minPoints: 3
    }
  }
}


class Draw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNames: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const currentShowNames = this.state.showNames
    this.setState( {
      showNames: !currentShowNames
    } )
  }

  render () {
    const { event, category, seed } = this.props.match.params

    const isOpenDraw = category === "open"

    const draw = (event === "mfs") ?
    genDraw(mfsPoints, seed, 8, 4) :
    genDraw(vfsPoints, seed, 10, 5)

    return (
      <Grid>
        <div>event: {event} cat: {category}</div>
        <div onClick={this.handleClick}>
          {draw2List(draw, this.state.showNames)}
        </div>
      </Grid>
    )
  }
}

export default Draw
