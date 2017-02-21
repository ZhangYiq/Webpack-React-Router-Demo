import React from 'react'
import NavLink from './NavLink'
import Content from './Content'
import './app.css'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav" className='navigation'>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">Sign</NavLink></li>
          <li><NavLink to="/about">Contact</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/about/url?zyq=123">url</NavLink></li>
        </ul>
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
})
