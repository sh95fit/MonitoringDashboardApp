import React, { Component } from 'react'
import DisplayNumber from '../containers/DisplayNumberContainer'

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        {/* <DisplayNumber number={this.props.number}></DisplayNumber> */}
        <DisplayNumber></DisplayNumber>
      </div>
    )
  }
}

export default DisplayNumberRoot