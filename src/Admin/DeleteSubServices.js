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



const DeleteSubService = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:4000/subservice`)
      .then((res) =>{
        setData(res.data);
        
      })
      .catch((err) =>{
        alert('Error fetching services')
      })
      setTimeout (()=>{
            new DataTable('#serviceTable');
      },1000)

    });
     
   const deleteSubServiceData = (sid) =>{
   axios.delete(`http://localhost:4000/subservice/${sid}`)
   .then((res) =>{
    alert('Sub Service deleted')

   })
   .catch((err) =>{
    alert('Error to deleting Sub Service')
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
          <th>SName</th> 
          <th>Sub SName</th>
         <th>Sub SDesc</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((subser)=>{
           return(
            <tr key={subser._id}>
              <td>{subser.sname}</td>
              <td>{subser.subsname}</td>
              <td>{subser.subsdesc}</td>
             
              <td className='d-flex'>
            <Button variant="contained" color="error" onClick={() =>{deleteSubServiceData(subser._id)}}> <DeleteIcon /> </Button>    
            <Button variant="contained" color="outlined"> <NavLink to={`/editsubservice/${subser._id}`}> <EditIcon /> </NavLink> </Button>            
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

export default DeleteSubService;