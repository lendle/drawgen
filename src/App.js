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
        <Route path="/drawgen/" exact component={Root}/>
        <Route path="/drawgen/:event/:category/:seed" component={Draw}/>
        <Route path="/drawgen/:event/:category" component={RandomSeedRedirect}/>
      </Switch>
    </div>
  )
}

export default App

//
// import {Grid, Row, Col, Panel, PageHeader, Button,
//   ButtonGroup} from 'react-bootstrap'
//
//   class App extends Component {
//     render() {
//       const { search } = this.props.location;
//       return (
//         <Grid>
//           <Row>
//             <PageHeader> Draw generator </PageHeader>
//           </Row>
//           <Row>
//             <Col sm={4}>
//               <Panel header ="Configure">
//                 <h5>Event</h5>
//                   <ButtonRow values={["VFS", "MFS"]}/>
//                 <hr/>
//                 <h5>Class</h5>
//                 <ButtonRow values={["Open", "Advanced"]}/>
//                 <hr/>
//
//               </Panel>
//
//             </Col>
//             <Col sm={8}>
//               <Panel header ="hi"> </Panel>
//             </Col>
//           </Row>
//         </Grid>
//       )
//     }
//   }
//
//   export default App;
//
//
// const ButtonRow = ({ values, activeValue, onClick }) => {
//   const buttons = values.map((value) => {
//     if (value === activeValue) {
//       return <Button key={value} active>{value}</Button>
//     }
//     return (
//       <Button
//         key={value}
//         onClick={(e) => {e.preventDefault(); onClick(value)}}>
//         {value}
//       </Button>
//     )
//   })
//
//   return <ButtonGroup>{buttons}</ButtonGroup>
//
// }
