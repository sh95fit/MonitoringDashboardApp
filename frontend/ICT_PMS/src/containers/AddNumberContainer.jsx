// Wrapping 용도
import React, { Component } from "react";
import AddNumber from "../components/AddNumber";

// redux 종속성 제거 목적
// redux와 관련된 통신을 Container가 수행
// presentational component는 기능에 집중할 수 있도록 분리

import store from "../store";

export default class extends Component {
  render(){
    return <AddNumber onClick={function(_size) {
      store.dispatch({type:"INCREMENT", size:_size});
    }.bind(this)}></AddNumber>
  }
}