import React from 'react'
import { NavLink } from 'react-router-dom'
import adminStyles from './adminsStyles.module.css'


const AdminSidebar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to=''>Add Service</NavLink>
            </li>
            <li>
                <NavLink to='deleteservice'>Delete/Edit Services</NavLink>
            </li>
             <li>
                <NavLink to='addsubservice'>Add SubService</NavLink>
            </li>
            <li>
                <NavLink to='subdeleteservices'>Delete/Edit Subervices</NavLink>
            </li>

              <li>
                <NavLink to='addoffer'>Add Offer</NavLink>
            </li>
            <li>
                <NavLink to='deleteoffer'>Delete/Edit Offer</NavLink>
            </li>
            <li>
                <NavLink to='servicedata'>Serive Data</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default AdminSidebar 