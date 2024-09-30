// import React, { Component } from "react";
import DisplayNumber from "../components/DisplayNumber";

import { connect } from "react-redux"

function mapReduxStateToReactProps(state) {
  // Redux의 store의 값이 변경될 때마다 호출 (subscribe와 유사)  (호출될 때마다 redux의 state 값을 가져온다)
  return {
    number:state.number
  }
}

// function mapReduxDispatchToReactProps() {
//   //dispatch 역할 수행
// }

// export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
export default connect(mapReduxStateToReactProps)(DisplayNumber);  // Display만 하므로 mapReduxDispatchToReactProps 불필요

// React Redux를 사용할 경우




// 일반 Redux를 사용할 경우

// import store from "../store";

// export default class extends Component {
//   state = {number:store.getState().number}
//   constructor(props){
//     super(props);
//     store.subscribe(function(){
//       this.setState({number:store.getState().number});
//     }.bind(this))
//   }

//   render(){
//     return <DisplayNumber number={this.state.number}></DisplayNumber>
//   }
// }