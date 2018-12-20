import React, { Component } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts'
class App extends Component {
  state = {
    data: [
      {
        name: 'aa',
        uv: 20
      },
      {
        name: 'bb',
        uv: 30
      },
      {
        name: 'cc',
        uv: 10
      },

      {
        name: 'dd',
        uv: 30
      },
      {
        name: 'ff',
        uv: 10
      }
    ],
    data1: [
      {
        name: '4k-6k',
        per: '3.9%'
      },
      {
        name: '6k-8k',
        per: '20%'
      },
      {
        name: '8k-10k',
        per: '50%'
      },
      {
        name: '10k-15k',
        per: '16.1%'
      }
    ],
    showDetail: []
  }
  render() {
    const { data, data1, showDetail } = this.state
    const newData = data1.map(e => {
      e.per = parseFloat(e.per)
      return e
    })

    const RADIAN = Math.PI / 180
    const renderCustomizedLabel = props => {
      const { cx, cy, midAngle, innerRadius, outerRadius, index } = props
      const radius = innerRadius + (outerRadius - innerRadius) + 22
      const x = cx + radius * Math.cos(-midAngle * RADIAN)
      const y = cy + radius * Math.sin(-midAngle * RADIAN)
      return (
        <text x={x} y={y} fill='#000' textAnchor={x > cx ? 'start' : 'end'}>
          {newData[index].name}
        </text>
      )
    }
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    return (
      <div>
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type='monotone'
            dataKey='uv'
            stroke='#8884d8'
            activeDot={{ r: 10 }}
            isAnimationActive={false}
          />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
        </LineChart>
        <PieChart width={500} height={250} style={{ margin: '0 auto' }}>
          <Pie
            data={newData}
            dataKey='per'
            nameKey='name'
            cx='180'
            cy='50%'
            outerRadius={100}
            innerRadius={40}
            // label内的函数 默认会接收一些跟 Pie 相关的 props
            label={renderCustomizedLabel}
            fill='#8884d8'
            onClick={this.handlePie}
          >
            {newData.map((e, ind) => (
              <Cell key={`cell-${ind}`} fill={COLORS[ind]} />
            ))}
          </Pie>
          <Legend align='right' layout='vertical' />
          <Tooltip />
        </PieChart>
        <div>
          <ul>
            {showDetail.map(e => (
              <li key={e.name}>
                {e.name}:{e.per}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  handlePie = ({ name, per }) => {
    const { showDetail } = this.state
    const newLi = {
      name,
      per
    }
    // find  findIndex    替代  indexOf   作为查找数组中是否有相同的对象
    if (showDetail.findIndex(e => e.name === newLi.name) === -1) {
      this.setState({
        showDetail: [...showDetail, newLi]
      })
    }
  }
}

export default App
