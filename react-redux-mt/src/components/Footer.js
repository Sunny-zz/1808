import React, { Component } from 'react'
import './footer.scss'
import { getAllNum, getTotal } from '../selectors/'
class Footer extends Component {
  render() {
    const { goods, cart } = this.props
    return (
      <footer>
        <span>{getAllNum(cart)} 个</span>
        <span>{getTotal(goods, cart)}另需配送费￥4</span>
        {getTotal(goods, cart) - 20 < 0 ? (
          <span>
            {getTotal(goods, cart) !== 0 ? '差' : ''}￥
            {20 - getTotal(goods, cart)}起送
          </span>
        ) : (
          <span>去结算</span>
        )}
      </footer>
    )
  }
}

export default Footer
