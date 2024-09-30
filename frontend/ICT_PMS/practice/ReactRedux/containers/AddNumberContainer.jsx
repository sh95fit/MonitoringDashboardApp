// Wrapping 용도
// import React, { Component } from "react";
import AddNumber from "../components/AddNumber";



// React-redux 활용 코드
// connect(mapStateToProps,mapDispatchToProps)(제어 컴포넌트)


import { connect } from "react-redux";

// function mapReduxStateToReactProps() {
//   // subscripbe와 유사한 기능 수행
// }

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function(_size) {
      dispatch({type:"INCREMENT", size:_size });
    }
  }
}

// export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddNumber);
export default connect(null, mapReduxDispatchToReactProps)(AddNumber); // 값 변경만 수행하므로 mapReduxStateToReactProps 불필요



// 일반 redux 활용 코드

// redux 종속성 제거 목적
// redux와 관련된 통신을 Container가 수행
// presentational component는 기능에 집중할 수 있도록 분리

// import store from "../store";

// export default class extends Component {
//   render(){
//     return <AddNumber onClick={function(_size) {
//       store.dispatch({type:"INCREMENT", size:_size});
//     }.bind(this)}></AddNumber>
//   }
// }