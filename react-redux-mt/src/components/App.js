import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Head from './Head'
import Home from './Home'
import '../constants/gloable.css'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ paddingBottom: '50px' }}>
          <Head />
          <Home />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
