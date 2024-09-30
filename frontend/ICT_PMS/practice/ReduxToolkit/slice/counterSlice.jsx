import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: 'counter',  // Slice의 이름 정의
  initialState:{value:0}, // 초기값
  reducers:{    // reducer 복수형!
    increase:(state, action) => {
      // console.log(action);
      state.value = state.value + action.payload;
    }
  }
});

export default counterSlice;
export const {increase} = counterSlice.actions;