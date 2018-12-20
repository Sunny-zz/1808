import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './app.css'
class App extends Component {
  state = {
    show: false,
    todos: [
      { id: 1, txt: '123sadjg ' },
      { id: 2, txt: 'asd has  ' },
      { id: 3, txt: 'asd askjh iu ' }
    ]
  }

  render() {
    const { show, todos } = this.state
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
        <div>
          <input type='text' />
          <button>添加</button>
          <ul>
            <TransitionGroup component={null}>
              {todos.map(e => (
                <CSSTransition key={e.id} timeout={3000} classNames='todo'>
                  <li>
                    {e.txt} <button>删除</button>
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
        </div>
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
