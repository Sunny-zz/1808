import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../static/gloable.css'
import Header from './Header/Header'
import Main from './Main/Main'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
