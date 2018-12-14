import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Recommend extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/post/1">vue 那点事</Link>
          </li>
          <li>
            <Link to="/post/2">程序猿生存指南</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Recommend
