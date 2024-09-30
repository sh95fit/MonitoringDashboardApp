import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slice/counterSlice";

const store = configureStore({
  reducer:{
    counter:counterSlice.reducer,    // reducer 단수형!
  }
});

export default store;