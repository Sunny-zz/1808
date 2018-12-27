import React, { Component } from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
class Cart extends Component {
  render() {
    const { products } = this.props
    return (
      <div>
        <ProductList products={products} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(Cart)
