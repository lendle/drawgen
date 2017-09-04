import React from 'react'
import { Redirect } from 'react-router-dom'

import seedrandom from 'seedrandom'

const RandomSeedRedirect = (props) => {
  const { event, category } = props.match.params
  const seed = Math.abs(seedrandom().int32())
  return <Redirect to={`/drawgen/${event}/${category}/${seed}`}/>
}

export default RandomSeedRedirect
