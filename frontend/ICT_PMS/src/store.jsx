import { configureStore } from "@reduxjs/toolkit"
import sidebarSlice from "./slice/sidebarSlice";

import { createLogger } from "redux-logger";

// Redux Logger 생성
const logger = createLogger();

const store = configureStore({
  reducer:{
    sidebar:sidebarSlice.reducer,    // reducer 단수형!
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();

    if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger);
    }

    return middlewares;
  },
});

export default store;