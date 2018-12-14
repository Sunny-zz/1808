import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Activities from '../Activities/Activities'
import Events from '../Events/Events'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Route component={Home} path="/" exact />
        <Route component={Activities} path="/activities" />
        <Route component={Events} path="/events" />
      </div>
    )
  }
}

export default Main
