import React from 'react'
import Order from '../components/Order'
import { connect } from 'react-redux'
import { getGoods, addToCart, delToCart } from '../actions/'
const OrderContainer = props => <Order {...props} />

const mapStateToProps = state => ({
  goods: state.goods,
  cart: state.cart
})
export default connect(
  mapStateToProps,
  { getGoods, addToCart, delToCart }
)(OrderContainer)
