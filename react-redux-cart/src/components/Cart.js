import React, { Component } from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { addToCart } from '../actions/'
class Cart extends Component {
  render() {
    const { products, addToCart } = this.props
    return (
      <div>
        <ProductList products={products} addToCart={addToCart} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products
})

export default connect(
  mapStateToProps,
  { addToCart }
)(Cart)
