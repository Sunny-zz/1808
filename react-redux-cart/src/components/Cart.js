import React, { Component } from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { addToCart } from '../actions/'
import ShoppingCart from './ShoppingCart'
class Cart extends Component {
  render() {
    const { products, addToCart, cart } = this.props
    return (
      <div>
        <ProductList products={products} addToCart={addToCart} />
        <ShoppingCart cart={cart} products={products} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
})

export default connect(
  mapStateToProps,
  { addToCart }
)(Cart)
