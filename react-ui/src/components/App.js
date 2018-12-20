import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './app.css'
class App extends Component {
  state = {
    show: false
  }
  render() {
    const { show } = this.state
    return (
      <div>
        <div>
          <button onClick={this.show}>按钮</button>
        </div>
        <CSSTransition
          timeout={3000}
          in={show}
          classNames='message'
          unmountOnExit
        >
          <span className='msg'>i have a dream</span>
        </CSSTransition>
      </div>
    )
  }
  show = () => {
    this.setState({
      show: true
    })
  }
}

export default App
