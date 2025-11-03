import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';

const DeleteService = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:4000/service`)
      .then((res) =>{
        setData(res.data);
        
      })
      .catch((err) =>{
        alert('Error fetching services')
      })
    })
  return ( 
  <main>
  
     <section className='py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
     
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>SName</th>
          <th>SDesc</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((ser)=>{
           return(
            <tr key={ser._id}>
              <td>{ser.sname}</td>
              <td>{ser.sdesc}</td>
             
              <td>
                <Button>Delete</Button>
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