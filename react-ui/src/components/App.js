import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './app.css'
import styled from 'styled-components'
import Button from './Button/Button'
class App extends Component {
  state = {
    show: false,
    todos: [
      { id: 1, txt: '123sadjg ' },
      { id: 2, txt: 'asd has  ' },
      { id: 3, txt: 'asd askjh iu ' }
    ],
    txt: ''
  }

  render() {
    const { show, todos, txt } = this.state
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
          <input type='text' value={txt} onChange={this.handleInput} />
          <button onClick={this.addToDo}>添加</button>
          <ul>
            <TransitionGroup component={null}>
              {todos.map(e => (
                <CSSTransition key={e.id} timeout={1000} classNames='todo'>
                  <li>
                    {e.txt}{' '}
                    <Btn
                      onClick={() => {
                        this.delToDo(e.id)
                      }}
                    >
                      删除
                    </Btn>
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
        </div>
        <Button />
      </div>
    )
  }
  show = () => {
    this.setState({
      show: true
    })
  }
  delToDo = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(e => e.id !== id)
    })
  }
  handleInput = event => {
    this.setState({
      txt: event.target.value
    })
  }
  addToDo = () => {
    const { txt, todos } = this.state
    this.setState({
      todos: [...todos, { id: new Date().getTime(), txt: txt }],
      txt: ''
    })
  }
}

export default App
const Btn = styled.button`
  color: red;
`
