import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { primary } from '../../static/color'

class Button extends Component {
  render() {
    return (
      <div>
        <Btn>
          <span>xxx</span>
          <span className='last'>222</span>
        </Btn>
        <Btn1>按钮</Btn1>
        <input type='text' />
        <Password type='password' />
        <Box />
      </div>
    )
  }
}

export default Button
const rotate = keyframes`
  0%{ transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
`

const Btn = styled.button`
  outline: 0;
  border: 0;
  padding: 5px 20px;
  border-radius: 5px;
  color: ${primary};
  :hover {
    color: tomato;
  }
  .last {
    color: green;
  }
`
const Password = styled.input.attrs({
  type: 'password'
})`
  text-indent: 20px;
`
const Btn1 = styled(Btn)`
  color: blue;
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
  animation: ${rotate} 3000ms linear infinite;
`
