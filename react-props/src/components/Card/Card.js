import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './card.css'
class Card extends Component {
  render() {
    const { imgSrc, title, pra, cardWidth } = this.props
    return (
      <div className="card" style={{ width: cardWidth }}>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
        <p>{pra}</p>
      </div>
    )
  }
}

export default Card
// 使用  propTypes 进行类型检查
Card.propTypes = {
  // 将该组件的 cardWidth 的属性值规定为字符串，也就是当父组件使用该组件的传 props 时，该属性的属性值需要是字符串类型
  cardWidth: PropTypes.string,
  // imgSrc 属性的值是字符串而且是必须的属性，也就是说父组件使用子组件的时候必须传递该属性
  imgSrc: PropTypes.string.isRequired
}
//使用  propTypes 对 props 进行默认值设置
Card.defaultProps = {
  title: '标题',
  pra: '段落'
}
