import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../practice/ReactRedux/App.jsx'
import './index.css'

import ErrorBoundary from './ErrorBoundary.jsx'

// react-redux 컴포넌트 적용
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  // </React.StrictMode>,
)
