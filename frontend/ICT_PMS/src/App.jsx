// import React, { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import LoginForm from './pages/LoginPage'
import Aggrid from './components/ag_grid'
import Sidebar from './components/Sidebar'
import SidebarMove from '../practice/SidebarMove'

function App() {

  return (
    <div>
      {/* <LoginForm></LoginForm> */}
      {/* <Aggrid></Aggrid> */}
      {/* <Sidebar></Sidebar> */}
      <SidebarMove />
    </div>
  )
}

export default App
