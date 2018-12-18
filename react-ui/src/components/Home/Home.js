import React, { Component } from 'react'

class Home extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    axios.get('https://cnodejs.org/api/v1/topic/?tab=all&page=1').then(res => {
      console.log(res.data.data)
    })
  }

  render() {
    return (
      <div>
        {/* 展示文章标题列表 默认展示第一页 */}
        {/* 分页器 */}
      </div>
    )
  }
}

export default Home
