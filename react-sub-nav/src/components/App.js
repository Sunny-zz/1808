import React, { Component } from 'react'
import Button from './Button/Button'
import SubNav from './SubNav/SubNav'
import '../static/gloable.css'
import Main from './Main/Main'
class App extends Component {
  state = {
    show: false
  }
  render() {
    const { show } = this.state
    return (
      <div>
        <Button />
        <SubNav show={show} />
        <Main />
      </div>
    )
  }
}

export default App
