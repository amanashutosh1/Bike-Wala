import React, { useEffect, useState } from 'react'
import innertylees from './innerStylees.module.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const EditStudent = () => {
  const[data, setData] = useState([]);
  useEffect(() =>{
    axios
    .get(`http://localhost:4000/student/`)
    .then(res =>{
      setData(res.data);
      
    })
    .catch(err =>{
      alert("Unable Fetching Student Data");
      
    })
  })
 

  return <main>
    <section className={innertylees.bread}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Edit Student</h1>
                </div>
            </div>
        </div>

    </section>
     <section className='py-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
     
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
          data.map((student)=>{
           return(
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.address}</td>
              <td>
                <NavLink to={`/studentedit/${student._id}`}>
              <Button>Edit</Button>
              </NavLink>
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
}

export default EditStudent