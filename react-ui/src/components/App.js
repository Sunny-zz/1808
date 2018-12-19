import React, { Component } from 'react'
import { Pagination, Skeleton } from 'antd'
import axios from 'axios'
import { URL } from '../static/url'
class App extends Component {
  state = {
    topics: []
  }
  componentDidMount() {
    const url = `${URL}/topics?tab=all&page=1`
    axios.get(url).then(res => {
      this.setState({
        topics: res.data.data
      })
    })
  }

  render() {
    const { topics } = this.state
    const content = topics.length ? (
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
    ) : (
      <Skeleton paragraph={{ rows: 4 }} title={false} />
    )
    return (
      <div>
        {content}
        <Pagination
          defaultCurrent={1}
          total={3330}
          pageSize={40}
          onChange={this.handlePag}
        />
      </div>
    )
  }
  handlePag = page => {
    const url = `${URL}/topics?tab=all&page=${page}`
    axios.get(url).then(res => {
      this.setState({
        topics: res.data.data
      })
    })
  }
}

export default App
