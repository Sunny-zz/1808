import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Head from './Head'
import Home from './Home'
import '../constants/gloable.css'

import FooterContainer from '../containers/FooterContainer'
class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ paddingBottom: '50px' }}>
          <Head />
          <Home />
          <FooterContainer />
        </div>
      </Router>
    )
  }
}

export default App
