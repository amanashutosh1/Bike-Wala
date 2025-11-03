import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/esm/Table';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import DataTable from "datatables.net-dt/js/dataTables.dataTables.min.js";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';



const DeleteService = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:4000/offer`)
      .then((res) =>{
        setData(res.data);
        
      })
      .catch((err) =>{
        alert('Error fetching Offers')
      })
      setTimeout (()=>{
            new DataTable('#serviceTable');
      },1000)

    });
     
   const deleteOfferData = (sid) =>{
   axios.delete(`http://localhost:4000/offer/${sid}`)
   .then((res) =>{
    alert('Offer deleted')

   })
   .catch((err) =>{
    alert('Error to deleting Offer')
   })
   }

  return ( 
  <main>
  
     <section className='py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
     
    <Table striped bordered hover id='serviceTable'>
      <thead>
        <tr>
          <th>OName</th>
          <th>ODesc</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((off)=>{
           return(
            <tr key={off._id}>
              <td>{off.oname}</td>
              <td>{off.odesc}</td>
             
              <td className='d-flex'>
            <Button variant="contained" color="error" onClick={() =>{deleteOfferData(off._id)}}> <DeleteIcon /> </Button>    
            <Button variant="contained" color="outlined"> <NavLink to={`/editoffer/${off._id}`}> <EditIcon /> </NavLink> </Button>            
             </td>
            </tr>
           )
          })
         }
      </tbody>
    </Table>

                </div>
            </div>
        </div>

    </section>
  </main>
  )
}

export default DeleteService 