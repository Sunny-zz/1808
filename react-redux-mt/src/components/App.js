import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Head from './Head'
import Home from './Home'
import '../constants/gloable.css'
class App extends Component {
  // componentDidMount() {
  //   console.log(this.el)
  // }

  render() {
    return (
      <Router>
        <div>
          <Head />
          <Home />
        </div>
      </Router>
    )
  }
}

export default App
