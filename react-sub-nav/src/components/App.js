import React, { Component } from 'react'
import Button from './Button/Button'
import SubNav from './SubNav/SubNav'
import '../static/gloable.css'
class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <SubNav />
      </div>
    )
  }
}

export default App
