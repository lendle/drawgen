import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Draw from './Draw'
import RandomSeedRedirect from './RandomSeedRedirect'


class Main extends React.Component {
  render () {
    console.log("main")
    return (
      <div>
        <Switch>
          <Route
            path="/drawgen/:event/:category/:seed"
            component={Draw}/>
          <Route
            path="/drawgen/:event/:category"
            component={RandomSeedRedirect}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    )
  }
}

export default Main;
