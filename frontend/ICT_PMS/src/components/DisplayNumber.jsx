import React, { Component } from 'react';
// import store from "../store";

class DisplayNumber extends Component {
  // state = {number:store.getState().number}
  // constructor(props){
  //   super(props);
  //   store.subscribe(function(){
  //     this.setState({number:store.getState().number});
  //   }.bind(this))
  // }

  render() {
    return (
      <div>
        <h1>Display Number</h1>
        {/* <input type="text" value={this.props.number} readOnly/> */}
        <input type="text" value={this.props.number} readOnly/> {this.props.unit}
      </div>
    )
  }
}

export default DisplayNumber;