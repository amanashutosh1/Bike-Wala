import React from 'react'
import { NavLink } from "react-router-dom"
import headerStyle from "./header.module.css";
import logo from './Screenshot 2025-11-03 204834.png'

const Header = () => {
  return (

    // <section className={headerStyle.header}>

      <nav className={`navbar navbar-expand-lg ${headerStyle.header} p-0  `}>
  <div className="container">
    
    <NavLink className="navbar-brand" to="/">
      <img  src={logo} alt='Logo' />
            <strong>Bike <em className='text-danger'>Wala~</em></strong>
    </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About US</NavLink>
        </li>

         <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>

         <li className="nav-item">
          <NavLink className="nav-link" to="/bookservices">Book Services</NavLink>
        </li>
         
         
         <li className="nav-item">
          <NavLink className="nav-link" to="/offers">Offers</NavLink>
        </li>

        
         <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">Contact US</NavLink>
        </li>
         
       <li className='nav-item'>
        <NavLink className='nav-link' to='/admin'>Admin</NavLink>
       </li>
      </ul>
     
    </div>
  </div>
</nav>

    // </section>
  )
}

export default Header 