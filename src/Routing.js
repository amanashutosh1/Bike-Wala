import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentData from './InnerPages/ProductData'
import AddStudent from './InnerPages/AddProduct'
import EditStudent from './InnerPages/EditStudent'
import DeleteStudent from './InnerPages/DeleteStudent'
import StudentEdit from './InnerPages/StudentEdit'
import MainPage from './InnerPages/MainPage'
import AboutUS from './InnerPages/AboutUS'
import Services from './InnerPages/Services'
import BookServices from './InnerPages/BookServices'
import Offers from './InnerPages/Offers'
import ContactUS from './InnerPages/ContactUS'
import Admin from './Admin/Admin'
import Register from './Admin/Register'
import AdminDashboard from './Admin/AdminDashboard'
import AddService from './Admin/AddService'
import DeleteService from './Admin/DeleteService'
import AddSubService from './Admin/AddSubService'
import EditService from './Admin/EditService'
import DeleteSubService from './Admin/DeleteSubServices'
import EditSubService from './Admin/EditSubService'
import AddOffer from './Admin/AddOffer'
import DeleteOffer from './Admin/DeleteOffer'
import EditOffer from './Admin/EditOffer'
import SubService from './InnerPages/SubService'
import ServiceData from './Admin/ServiceData'
import ForgotPassword from './Admin/ForgotPassword'
import AddProduct from './InnerPages/AddProduct'
import ProductData from './InnerPages/ProductData'

const Routing = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={< MainPage />} />
        <Route path='/aboutus' element={< AboutUS />} />
        <Route path='/services' element={< Services />} />
        <Route path='/subservice/:sid/:snamedata' element={< SubService />} />

        <Route path='/bookservices' element={< BookServices />} />
        <Route path='/offers' element={< Offers />} />
        <Route path='/contactus' element={< ContactUS />} />
        <Route path='/addproduct' element={< AddProduct />} />
        <Route path='/productdata' element={< ProductData />} />

        <Route path='/admin' element={< Admin />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />} />  {/* ✅ new route */}

        <Route path='/register' element={< Register />} />


        <Route path='/admindashboard' element={< AdminDashboard />}>

        <Route path='' element={ <AddService />} />
        <Route path='deleteservice' element={ <DeleteService />} />
        <Route path='addsubservice' element={ <AddSubService />} />
        <Route path='subdeleteservices' element={ <DeleteSubService />} />
        <Route path='addoffer' element={ <AddOffer />} />
        <Route path='deleteoffer' element={ <DeleteOffer />} />
        <Route path='servicedata' element={ <ServiceData />} />

        </Route>
         
      <Route path='editservice/:sid' element={ <EditService />} />
      <Route path='editsubservice/:sid' element={ <EditSubService />} />
      <Route path='editoffer/:sid' element={ <EditOffer />} />


    </Routes>
    </>
  )
}

export default Routing