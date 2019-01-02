import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Rating from './Rating'
import Seller from './Seller'
import OrderContainer from '../containers/OrderContainer'
class Main extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={OrderContainer} />
        <Route path='/rating' component={Rating} />
        <Route path='/seller' component={Seller} />
      </div>
    )
  }
}

export default Main
