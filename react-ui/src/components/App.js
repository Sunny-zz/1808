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
    ]
  }
  render() {
    const { data, data1 } = this.state
    const newData = data1.map(e => {
      e.per = parseFloat(e.per)
      return e
    })
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
            cx='140'
            cy='50%'
            outerRadius={100}
            innerRadius={40}
            label
            fill='#8884d8'
          >
            {newData.map((e, ind) => (
              <Cell key={`cell-${ind}`} fill={COLORS[ind]} />
            ))}
          </Pie>
          <Legend align='right' layout='vertical' />
        </PieChart>
      </div>
    )
  }
}

export default App
