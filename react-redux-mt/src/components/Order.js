import React, { Component } from 'react'
import './Order.scss'
import Bscroll from 'better-scroll'

class Order extends Component {
  componentDidMount() {
    this.props.getGoods()
  }
  // cdu 更新完毕   props 或者 state 更新之后页面重新渲染完毕才执行
  componentDidUpdate() {
    const { goods } = this.props
    if (goods.length) {
      // 定义一个全局变量 Bscroll
      this.Bscroll = new Bscroll(this.foodListWrapper, {})
    }
  }

  render() {
    const { goods } = this.props
    console.log(goods)
    const goodsContent = goods.length ? (
      <div className='goods'>
        <div className='food-tabs'>
          {goods.map((e, index) => (
            <div
              onClick={() => {
                // this.Bscroll.scrollToElement(
                //   document.querySelectorAll('.food-list>div')[index],
                //   500
                // )
                this.Bscroll.scrollToElement(this[`foodList${index}`], 500)
              }}
              key={e.id}
            >
              {e.name}
            </div>
          ))}
        </div>
        <div
          className='food-list-wrapper'
          ref={listWrapper => (this.foodListWrapper = listWrapper)}
        >
          <div className='food-list'>
            {goods.map((e, index) => (
              <div ref={ele => (this[`foodList${index}`] = ele)} key={e.id}>
                <h3>{e.name}</h3>
                {e.foods.map(e => (
                  <div className='food' key={e.id}>
                    <img src={e.icon} alt='' />
                    <div className='food-info'>
                      <h4>{e.name}</h4>
                      <span>{e.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    ) : (
      <span>请稍等</span>
    )
    return goodsContent
  }
}

export default Order
