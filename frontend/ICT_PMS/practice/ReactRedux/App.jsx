// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'
import './App.css'
import AddNumberRoot from './components/AddNumberRoot'
import DisplayNumberRoot from './components/DisplayNumberRoot'

class App extends Component {
  state = {number:0}

  render(){
    return (
      <div className='container'>
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
        {/* <AddNumberRoot onClick={function(size){
          this.setState({number:this.state.number + size})
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot> */}
      </div>
    );
  }
}

export default App
