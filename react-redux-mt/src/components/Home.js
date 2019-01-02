import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './home.scss'
import Main from './Main'
class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='tabs'>
          <NavLink exact to='/'>
            点餐
          </NavLink>
          <NavLink to='/rating'>评价</NavLink>
          <NavLink to='/seller'>商家</NavLink>
        </div>
        <Main />
      </div>
    )
  }
}

export default Home
