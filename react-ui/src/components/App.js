import React, { Component } from 'react'
import '../static/gloable.css'
import { Button, Progress } from 'antd'
class App extends Component {
  state = {
    percent: [0, 0, 0]
  }
  componentDidMount() {
    // 组件首次挂载完毕   允许修改 state
    const targetPercent = [96, 60, 80]
    for (let i = 0; i < targetPercent.length; i++) {
      this[i] = setInterval(() => {
        const { percent } = this.state
        const newPercent = [...percent]
        if (newPercent[i] === targetPercent[i]) {
          // 停止计时器
          clearInterval(this[i])
        } else {
          newPercent[i] = newPercent[i] + 4
          this.setState({
            percent: newPercent
          })
        }
      }, 100)
    }
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
            percent={percent[0]}
            strokeColor='pink'
            strokeWidth={20}
            status='active'
          />
          <span>ccs技能：</span>
          <Progress
            percent={percent[1]}
            strokeColor='pink'
            strokeWidth={20}
            status='active'
          />
          <span>js技能：</span>
          <Progress
            percent={percent[2]}
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
