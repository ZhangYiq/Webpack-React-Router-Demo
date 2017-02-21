// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'
import './navLink.css';

export default React.createClass({
  render() {
    return <Link to={this.props.to} activeClassName="active" className="hhh">
    			{this.props.children}
    		</Link>
  }
})
