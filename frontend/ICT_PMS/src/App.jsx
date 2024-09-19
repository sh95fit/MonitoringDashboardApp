import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);

  return (
    <div className='container'>
      <h1>프로젝트 시작 전 React Refresh</h1>
      <input type="button" value="remove func" onClick={() =>
        setFuncShow(false)
      } />
      <input type="button" value="remove class" onClick={() =>
        setClassShow(false)
      } />
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  )
}

var funcStyle = 'color:blue';
var funcId = 0;

function FuncComp(props) { // 자기 자신이 render 함수
  var numberState = useState(props.initNumber);   // 2개의 값으로 구성된 배열 (괄호 내에는 초기값 반영)
  // 첫번째(0) 값은 state의 값, 두번째(1)는 상태를 변경하는 함수
  var number = numberState[0]; // state 상태 값
  var setNumber = numberState[1]; // state 상태 값을 변경할 수 있는 함수

  var [_date, setDate] = useState((new Date()).toString());


  // side effect가 발생한다. 다중 사용이 가능하다
  useEffect(() => {
    console.log("%cfunc => useEffect (componentDidMount & componentDidUpdate) A"+(++funcId), funcStyle);
    document.title = number + ' : ' + _date;
    return function() {  // clean up
      console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) A'+(++funcId), funcStyle)
    }
  }, [number])   // , [변수] : 해당 변수가 변경될 때만 실행하도록 처리

  useEffect(() => {
    console.log("%cfunc => useEffect (componentDidMount & componentDidUpdate) B"+(++funcId), funcStyle);
    document.title = number + ' : ' + _date;
    return function() {  // clean up
      console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) A'+(++funcId), funcStyle)
    }
  }, [_date])

  // componentDidMount를 componentDidUpdate와 분리 실행
  useEffect(() => {
    console.log("%cfunc => useEffect (componentDidMount) C"+(++funcId), funcStyle);
    document.title = number + ' : ' + _date;
    return function() {  // clean up
      console.log('%cfunc => useEffect return (componentWillUnMount) C'+(++funcId), funcStyle) // 컴포넌트 소멸 시 1회 실행
    }
  }, []) // 빈 배열을 넣으면 1회는 실행되고 그 이후에는 실행되지 않음 (즉, 최초 생성 시에만 실행)


  console.log('%cfunc => render'+(++funcId), funcStyle);

  return (
    <div className='container'>
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={() =>
          setNumber(Math.random())
        } />
      <input type="button" value="date" onClick={() =>
        setDate((new Date()).toString())
      } />
    </div>
  );
}

var classStyle = 'color:red';

class ClassComp extends React.Component{  // render 메서드를 활용
  state = {
    number:this.props.initNumber,
    _date:(new Date()).toString()
  }

  componentDidMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }

  shouldComponentUpdate(nextProps, netxState){
    console.log("%cclass => shouldComponentUpdate", classStyle);
    return true;
  }

  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', classStyle);
  }  // 컴포넌트 소멸 시 1회 실행


  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className='container'>
        <h2>Class Style Component</h2>
        {/* <p>Number : {this.props.initNumber}</p> */}
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state._date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})   // setState를 통해 state에 새로운 값을 전달
          }.bind(this)
        } />
        <input type="button" value="date" onClick={
          function() {
            this.setState({_date:(new Date()).toString()})
          }.bind(this)
        } />
      </div>
    )
  }
}

export default App
