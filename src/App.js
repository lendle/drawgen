import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Draw from './Draw'
import DrawNavbar from './DrawNavbar'
import RandomSeedRedirect from './RandomSeedRedirect'
import Root from './Root'

const App = () => {
  return (
    <div>
      <DrawNavbar/>
      <Switch>
        <Route path="/drawgen/:event/:category/:seed" component={Draw}/>
        <Route path="/drawgen/:event/:category" component={RandomSeedRedirect}/>
        <Route component = {Root}/>
      </Switch>
    </div>
  )
}

export default App
