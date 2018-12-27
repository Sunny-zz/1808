import React, { Component } from 'react'

class ProductList extends Component {
  render() {
    const { products } = this.props
    const list = products.length ? (
      <ul>
        {products.map(e => (
          <li key={e.id}>
            <span>{e.productName}</span>- <span>${e.price}</span> x
            <span>{e.inventory}</span>
          </li>
        ))}
      </ul>
    ) : (
      <div>请稍等</div>
    )
    return <div>{list}</div>
  }
}

export default ProductList
