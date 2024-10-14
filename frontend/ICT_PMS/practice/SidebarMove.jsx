import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom';

const SidebarMove = () => {
  return (
    <div className="d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100" style={{ width: '250px'}}>
      <div>
        <a href="" className="d-flex align-items-center">
          <i className='bi bi-bootstrap fs-5 me-2'></i>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr className="text-secondary mt-2"/>
        <ul className="nav nav-pills flex-column p-0 m-0">
          <li className="nav-item p-1">
            <Link to="/" className="nav-link text-white">
              <i className="bi bi-speedometer me-2 fs-5"></i>
              <span className="fs-5">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <Link to="/order" className="nav-link text-white">
              <i className="bi bi-table me-2 fs-5"></i>
              <span className="fs-5">Orders</span>
            </Link>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-people me-2 fs-5"></i>
              <span className="fs-5">Customers</span>
            </a>
          </li>
          <li className="nav-item p-1">
            <a href="" className="nav-link text-white">
              <i className="bi bi-grid me-2 fs-5"></i>
              <span className="fs-5">Report</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secondary"/>
        <i className="bi bi-person fs-5"></i>
        <span className="fs-5 ml-3">Yourself</span>
      </div>
    </div>
  )
}

const SidebarWrapper = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <SidebarMove />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/order" element={<Order />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default SidebarWrapper;


function Home() {
  return <h2>Home component</h2>
}

function Order() {
  return <h2>Order component</h2>
}