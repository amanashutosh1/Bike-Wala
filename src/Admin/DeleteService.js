import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/esm/Table';
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import DataTable from "datatables.net-dt/js/dataTables.dataTables.min.js";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DeleteService = () => {
  const [data, setData] = useState([]);

  // Fetch services
  const fetchServices = () => {
    axios.get('http://localhost:4000/services')
      .then(res => setData(res.data))
      .catch(() => alert('Error fetching services'));
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Initialize DataTable after data updates
  useEffect(() => {
    if (data.length > 0) {
      setTimeout(() => {
        new DataTable('#serviceTable', {
          destroy: true, // destroy previous instance before re-initializing
        });
      }, 100);
    }
  }, [data]);

  // Delete service
  const deleteServiceData = (sid) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      axios.delete(`http://localhost:4000/service/${sid}`)
        .then(() => {
          alert('Service deleted');
          fetchServices(); // refresh table
        })
        .catch(() => alert('Error deleting service'));
    }
  };

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
                    <th>SDesc</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(ser => (
                    <tr key={ser._id}>
                      <td>{ser.sname}</td>
                      <td>{ser.sdesc}</td>
                      <td className='d-flex gap-2'>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => deleteServiceData(ser._id)}
                        >
                          <DeleteIcon />
                        </Button>
                        <Button variant="contained" color="primary">
                          <NavLink to={`/editservice/${ser._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                            <EditIcon />
                          </NavLink>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeleteService;
