import React, { Component } from 'react'

class Order extends Component {
  componentDidMount() {
    this.props.getGoods()
  }
  render() {
    const { goods } = this.props
    console.log(goods)

    const goodsContent = goods.length ? (
      <div>
        <div className='food-tabs'>
          {goods.map(e => (
            <div key={e.id}>{e.name}</div>
          ))}
        </div>
        <div>
          {goods.map(e => (
            <div key={e.id}>
              <h3>{e.name}</h3>
              {e.foods.map(e => (
                <div key={e.id}>
                  <img src={e.icon} alt='' />
                  <div>
                    <h4>{e.name}</h4>
                    <span>{e.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <span>请稍等</span>
    )
    return goodsContent
  }
}

export default Order
