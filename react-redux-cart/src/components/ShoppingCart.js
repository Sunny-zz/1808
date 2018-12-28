import React, { Component } from 'react'

class ShoppingCart extends Component {
  render() {
    const { cart, products } = this.props
    // {pid:[],byid:{}}   [{},{},{}]
    const cartContent =
      cart.productId.length && products.length ? (
        <ul>
          {cart.productId.map(e => {
            const product = products.find(product => product.id === e)
            return (
              <li key={e}>
                {product.productName}
                <span>
                  {product.price} x <span>{cart.quantityById[e]}</span>
                </span>
              </li>
            )
          })}
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
