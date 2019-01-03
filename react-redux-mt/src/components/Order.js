import React, { Component } from 'react'
import './Order.scss'
import Bscroll from 'better-scroll'
import { getTopArr } from '../selectors'
class Order extends Component {
  state = {
    activeTab: '热销榜'
  }
  componentDidMount() {
    this.props.getGoods()
  }
  // cdu 更新完毕   props 或者 state 更新之后页面重新渲染完毕才执行
  componentDidUpdate() {
    const { goods } = this.props
    // 只要更新了 props 或者 state 那么下面的判断就会重新执行，所以就会重新生成滚动条，滚动条位置就回到初始位置,要创建滚动条只能执行一次
    if (goods.length && !this.isHaveScroll) {
      // 定义一个全局变量 Bscroll
      this.isHaveScroll = true
      this.Bscroll = new Bscroll(this.foodListWrapper, {
        mouseWheel: true,
        probeType: 3,
        click: true
      })
      const { goods } = this.props
      const topArr = getTopArr(goods)
      this.Bscroll.on('scroll', ({ y }) => {
        // 原生js 的 offsetTop 可以获取元素距离父级顶部的距离来计算什么时候更新 state
        // const arr = [0, 572, 1114, 1567, 2100]
        // 通过 goods 数组 创建一个新数组 每一个类别的div 距离父级顶部的距离
        // if (-y > 476) {
        //   this.setState({
        //     activeTab: '优惠榜'
        //   })
        // }
        // console.log(-y)

        for (let i = 0; i < topArr.length; i++) {
          if (-y >= topArr[i] && -y < topArr[i + 1]) {
            this.setState({
              activeTab: i === 0 ? '热销榜' : i === 1 ? '优惠榜' : '精品榜'
            })
          }
          if (i === 2 && -y >= topArr[i]) {
            this.setState({
              activeTab: '精品榜'
            })
          }
        }
      })
    }
  }
  // 如果你的 左侧导航以及右侧食物展示列表是两个组件
  // 比如 左侧组件叫 Nav 右侧组件叫 List  父组件 叫 Food
  // 在 List 组件中使用 better-scroll 创建滚动条
  // 我想在兄弟组件内使用另个兄弟组件内的全局变量
  // 在 父组件中 给 List 组件写个 ref 属性，给组件写 ref 相当于获取组件
  //
  render() {
    const { goods, cart, addToCart } = this.props
    console.log(cart)

    const { activeTab } = this.state
    const goodsContent = goods.length ? (
      <div className='goods'>
        <div className='food-tabs'>
          {goods.map((e, index) => (
            <div
              className={activeTab === e.name ? 'active' : ''}
              onClick={() => {
                // this.Bscroll.scrollToElement(
                //   document.querySelectorAll('.food-list>div')[index],
                //   500
                // )
                this.setState({
                  activeTab: e.name
                })

                this.Bscroll.scrollToElement(this[`foodList${index}`], 1000)
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
                      {cart.foodsId.indexOf(e.id) !== -1 ? (
                        <button>-</button>
                      ) : (
                        ''
                      )}
                      {cart.quantityById[e.id] ? (
                        <span>{cart.quantityById[e.id]}</span>
                      ) : (
                        ''
                      )}
                      <button
                        onClick={() => {
                          addToCart(e.id)
                        }}
                      >
                        +
                      </button>
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
