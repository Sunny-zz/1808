import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Order from './Order'
import Rating from './Rating'
import Seller from './Seller'
class Main extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Order} />
        <Route path='/rating' component={Rating} />
        <Route path='/seller' component={Seller} />
      </div>
    )
  }
}

export default Main
