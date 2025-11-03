import React, { useEffect, useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { Store } from '../App';
import AdminSidebar from './AdminSidebar';
import adminStyles from './adminsStyles.module.css';

const AdminDashboard = () => {
  const [token] = useContext(Store);
  const [data, setData] = useState('');

  useEffect(() => {
    if (!token) return;

    axios
      .get('http://localhost:4000/admindashboard', {
        headers: { 'x-token': token },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [token]);

  if (!token) return null;

  return (
    <main className={adminStyles.adminMain}>
      <section className={adminStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{data} Dashboard</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AdminSidebar />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
