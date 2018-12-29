import React, { Component } from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { addToCart, checkoutCart, subProductQuantity } from '../actions/'
import ShoppingCart from './ShoppingCart'
import './cart.scss'
class Cart extends Component {
  render() {
    const {
      products,
      addToCart,
      cart,
      checkoutCart,
      subProductQuantity
    } = this.props
    return (
      <div className='shopping-cart'>
        <ProductList products={products} addToCart={addToCart} />
        <ShoppingCart
          cart={cart}
          products={products}
          checkoutCart={checkoutCart}
          addToCart={addToCart}
          subProductQuantity={subProductQuantity}
        />
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
  { addToCart, checkoutCart, subProductQuantity }
)(Cart)
