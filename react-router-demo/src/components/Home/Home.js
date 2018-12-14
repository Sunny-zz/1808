import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import './home.css'
import Recommend from '../Recommend/Recommend'
import FrontEnd from '../FrontEnd/FrontEnd'
import BackEnd from '../BackEnd/BackEnd'
import Layout from '../Layout/Layout'
class Home extends Component {
  render() {
    return (
      <Layout className="home">
        <ul>
          <li>
            <NavLink to="/" exact>
              推荐
            </NavLink>
          </li>
          <li>
            <NavLink to="/welcome/frontend">前端</NavLink>
          </li>
          <li>
            <NavLink to="/welcome/backend">后端</NavLink>
          </li>
        </ul>
        <div>
          <Route component={Recommend} path="/" exact />
          <Route component={FrontEnd} path="/welcome/frontend" />
          <Route component={BackEnd} path="/welcome/backend" />
        </div>
      </Layout>
    )
  }
}

export default Home
