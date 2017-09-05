import React from 'react'

import { ListGroupItem, ListGroup, Grid } from 'react-bootstrap'

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
                return <ListGroupItem style={{padding: '2px 10px'}}><small>{name}</small></ListGroupItem>
              })}
            </ListGroup>

          }
        </ListGroupItem>
      }
    )}
  </ListGroup>

)}

const drawConfigs = {
  "mfs" : {
    "open" : {
      rounds : 8,
      minPointsPerRound : 4,
      points: mfsPoints
    }
  },
  "vfs" : {
    "open" : {
      rounds: 10,
      minPointsPerRound: 5,
      points: vfsPoints
    },
    "advanced" : {
      rounds: 10,
      minPointsPerRound: 3,
      points: vfsPoints.filter(({advanced}) => advanced)
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

    const config = drawConfigs[event][category]

    if (config == null) return <div></div>

    const draw = genDraw(config['points'], seed, config['rounds'], config['minPointsPerRound'])

    return (
      <Grid onClick={this.handleClick}>
        {draw2List(draw, this.state.showNames)}
      </Grid>
    )
  }
}

export default Draw
