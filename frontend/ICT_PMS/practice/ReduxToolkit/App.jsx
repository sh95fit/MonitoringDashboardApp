import React from "react"

// import { createStore} from "redux"

import { Provider, useSelector, useDispatch } from "react-redux"

import store from "./store"
import {increase} from "./slice/counterSlice"


function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => {
    return state.counter.value;
  });

  return <div>
    <button onClick={() => {
      // dispatch({type:'counter/increase', step:2});   // type : 'slice 이름/reducers의 키값'
      // dispatch(counterSlice.actions.increase(2));   // createSlice로 할당된 객체 counterSlice의 actions(복수형!)으로 접근 가능
      dispatch(increase(2));   // createSlice로 할당된 객체 counterSlice의 actions(복수형!)으로 접근 가능
    }}>+</button> {count}
  </div>
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}



// redux-toolkit을 사용하지 않는 경우

// function reducer(state, action) {
//   if(state === undefined) {
//     return {
//       value:0,
//     }
//   }

//   var newState = {...state}

//   if(action.type === "INCREASE") {
//     newState.value += action.step;
//   }

//   return newState

// }

// const initialState = {value:0}
// const store = createStore(reducer, initialState);

// function Counter() {
//   const dispatch = useDispatch();
//   const count = useSelector(state=> state.value);

//   return <div>
//     <button onClick={()=>{
//       dispatch({type:"INCREASE", step:2})
//     }}>+</button> {count}
//   </div>
// }



// export default function App() {

//   return (
//     <Provider store={store}>
//       <div className='container' id="container">
//         <Counter></Counter>
//       </div>
//     </Provider>
//   )
// }
