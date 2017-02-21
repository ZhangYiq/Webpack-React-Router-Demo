import React from 'react'

import './content.css'

export default React.createClass({
  render() {
    return (
      <div className="content">
          {this.props.children}
      </div>
    )
  }
})
