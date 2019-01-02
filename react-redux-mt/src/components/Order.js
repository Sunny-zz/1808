import React, { Component } from 'react'
import './Order.scss'
import Bscroll from 'better-scroll'

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
        mouseWheel: true
      })
    }
  }
  // 如果你的 左侧导航以及右侧食物展示列表是两个组件
  // 比如 左侧组件叫 Nav 右侧组件叫 List  父组件 叫 Food
  // 在 List 组件中使用 better-scroll 创建滚动条
  // 我想在兄弟组件内使用另个兄弟组件内的全局变量
  // 在 父组件中 给 List 组件写个 ref 属性，给组件写 ref 相当于获取组件
  render() {
    const { goods } = this.props
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
