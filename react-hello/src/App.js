import React, { Component } from 'react'
import Button from './Button'
import './app.css'
import pic from './img/1.jpeg'

class App extends Component {
  render() {
    let a = 20
    const title = 'react'
    return (
      <div className="wrap">
        <div className="app" title={title} style={{ color: 'red' }}>
          {++a}
          <Button />
        </div>
        <img src={pic} alt="" />
      </div>
    )
  }
}

export default App
