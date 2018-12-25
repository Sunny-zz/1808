import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Main from './Main/Main'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <header>
            <Link to='/'>首页</Link>
          </header>
          <Main />
        </>
      </BrowserRouter>
    )
  }
}

export default App
