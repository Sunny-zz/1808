import React, { Component } from 'react'
import '../static/gloable.css'
import { Button, Progress } from 'antd'
class App extends Component {
  state = {
    percent: 0
  }
  componentDidMount() {
    // 组件首次挂载完毕   允许修改 state

    this.per = setInterval(() => {
      const { percent } = this.state
      if (percent === 99) {
        // 停止计时器
        clearInterval(this.per)
      } else {
        this.setState({
          percent: percent + 1
        })
      }
    }, 100)
  }

  render() {
    // 只要更新了 state  props  render就重新执行
    const { percent } = this.state
    return (
      <div>
        <Button type='primary'>button</Button>
        <div style={{ width: '40%' }}>
          <span>html技能：</span>
          <Progress
            percent={percent}
            strokeColor='pink'
            strokeWidth={20}
            status='active'
          />
          {/* <Progress percent={50} status='active' />
          <Progress percent={70} status='exception' />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} /> */}
          <Progress type='circle' percent={75} />
        </div>
      </div>
    )
  }
}

export default App
