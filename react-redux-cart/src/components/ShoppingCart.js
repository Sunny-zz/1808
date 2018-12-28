import React, { Component } from 'react'

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props
    const cartContent = cart.length ? (
      <ul>
        {cart.map(e => (
          <li key={e.id}>{e.productName}</li>
        ))}
      </ul>
    ) : (
      <div>Please add some products to cart.</div>
    )
    return (
      <div>
        <h2>shopping-cart</h2>
        {cartContent}
        <span>$total 0.00</span>
        <br />
        <button disabled={cart.length ? false : true}>Checkout</button>
      </div>
    )
  }
}

export default ShoppingCart
