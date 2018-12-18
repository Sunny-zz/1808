import React, { Component } from 'react'
import '../static/gloable.css'
import { Button, Progress, Icon } from 'antd'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})
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
            status={percent[0] === 96 ? 'normal' : 'active'}
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
        <Icon type='exception' style={{ fontSize: '30px' }} />
        <IconFont type='icon-qq' />
        <svg
          className='icon'
          viewBox='0 0 1024 1024'
          xmlns='http://www.w3.org/2000/svg'
          width='200'
          height='200'
        >
          <defs>
            <style />
          </defs>
          <path d='M218.399 92.602c-47.6 33.3-88.9 74.3-122.8 121.8C27.5 309.702-6.1 426.3 1 542.6c1.5 25.1 23.1 44.2 48.2 42.7s44.2-23.1 42.7-48.2C79.8 338 211.098 156.402 404.197 105.202c147.999-39.2 303.698 4.9 408.897 112.7l-71 38.2 220.7 136.399 7.9-259.299-74.7 40.2c-58.4-66.2-132.8-116.1-216.799-145.3-96.3-33.3-199.399-37.1-298.298-10.9-58.6 15.5-113.3 40.9-162.5 75.4zm-165.1 798.196l74.7-40.1c58.4 66.2 132.8 116.1 216.8 145.2 96.299 33.3 199.398 37.1 298.297 10.9 38.5-10.2 75.3-24.6 110-43.1 18.1-9.6 35.6-20.4 52.5-32.2 47.6-33.3 88.799-74.2 122.699-121.6 68.1-95.2 101.8-211.698 94.8-327.898-1.5-25.1-23.1-44.2-48.2-42.7s-44.2 23.1-42.7 48.2c11.8 198.699-119.6 380.098-312.398 431.298-148 39.2-303.699-4.9-408.898-112.7l71-38.2L61.198 631.5l-7.9 259.299z' />
        </svg>
        <svg
          className='icon'
          viewBox='0 0 1024 1024'
          xmlns='http://www.w3.org/2000/svg'
          width='200'
          height='200'
        >
          <defs>
            <style />
          </defs>
          <path
            d='M330.918 888.013c12.398 0 22.497-10.099 22.497-22.498L313.42 380.663c0-12.399-10.099-22.498-22.497-22.498s-22.498 10.099-22.498 22.498l39.996 484.852c.1 12.4 10.099 22.498 22.498 22.498zm181.082 0c12.399 0 22.498-10.099 22.498-22.498V380.663c0-12.399-10.1-22.498-22.498-22.498s-22.498 10.099-22.498 22.498v484.852c0 12.4 10.1 22.498 22.498 22.498zm181.082 0c12.4 0 22.498-10.099 22.498-22.498l39.996-484.852c0-12.399-10.099-22.498-22.498-22.498s-22.497 10.099-22.497 22.498l-39.996 484.852c0 12.4 10.099 22.498 22.497 22.498z'
            fill='#000'
          />
          <path
            d='M989.253 216.479H746.877v-81.692c0-35.197-11.499-68.493-32.297-93.691C692.882 14.599 663.485 0 631.888 0H392.112c-31.597 0-60.994 14.599-82.792 41.096-20.798 25.198-32.197 58.494-32.197 93.69v81.693H34.747c-12.4 0-22.498 10.099-22.498 22.498s10.099 22.497 22.498 22.497h72.792l59.995 648.037c0 63.194 51.395 114.489 114.488 114.489h459.956c63.193 0 114.488-51.395 114.488-114.489l59.995-648.137h72.792c12.4 0 22.498-10.099 22.498-22.497s-10.099-22.398-22.498-22.398zM322.02 134.687c0-49.495 31.496-89.791 70.093-89.791h239.776c38.697 0 70.093 40.296 70.093 89.79v81.693H322.02v-81.692zM811.57 909.41c0 38.396-31.197 69.593-69.593 69.593H282.022c-38.396 0-69.593-31.197-69.593-69.593l-59.994-648.037h719.23L811.57 909.411z'
            fill='#000'
          />
        </svg>
      </div>
    )
  }
}

export default App
