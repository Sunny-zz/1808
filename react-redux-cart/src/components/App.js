import React, { Component } from 'react'
import Cart from './Cart'
import { connect } from 'react-redux'
import { getProducts } from '../actions/'
class App extends Component {
  componentDidMount() {
    const { getProducts } = this.props
    getProducts()
  }

  render() {
    return (
      <div>
        <h1>react-redux shopping-cart</h1>
        <Cart />
      </div>
    )
  }
}

export default connect(
  null,
  { getProducts }
)(App)
