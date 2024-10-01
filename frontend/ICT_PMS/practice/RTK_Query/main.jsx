import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ErrorBoundary from '../../src/ErrorBoundary.jsx'

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./app/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ErrorBoundary>
      <ApiProvider api={api}>
        <App />
      </ApiProvider>
    </ErrorBoundary>
  // </React.StrictMode>,
)
