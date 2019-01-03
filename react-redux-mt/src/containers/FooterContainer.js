import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/Footer'
const FooterContainer = props => <Footer {...props} />

const mapStateToProps = state => ({
  goods: state.goods,
  cart: state.cart
})
export default connect(mapStateToProps)(FooterContainer)
