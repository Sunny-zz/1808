import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import Post from '../Post/Post'
class Main extends Component {
  render() {
    return (
      <div>
        <Route component={Home} path='/' exact />
        <Route component={Post} path='/post/:id' />
      </div>
    )
  }
}

export default Main
