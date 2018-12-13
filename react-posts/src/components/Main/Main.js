import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Posts from '../Posts/Posts'
import Post from '../Post/Post'
class Main extends Component {
  render() {
    return (
      <div>
        <Route component={Posts} path="/" />
        <Route component={Post} path="/post" />
      </div>
    )
  }
}

export default Main
