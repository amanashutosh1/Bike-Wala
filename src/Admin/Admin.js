import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { Store } from '../App';
import './Admin.css'; // ✅ Import custom CSS

const Admin = () => {
  const [token, setToken] = useContext(Store);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const clearData = () => {
    setEmail('');
    setPassword('');
  };

  const subHandler = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:4000/login`, { email, password })
      .then((res) => {
        if (res.data.token) {
          setToken(res.data.token);
        } else {
          alert('No token received from server');
        }
      })
      .catch(() => {
        alert('Login failed. Please check your credentials.');
      });
  };

  useEffect(() => {
    if (token) {
      navigate('/admindashboard');
    }
  }, [token, navigate]);

  return (
    <div className="admin-bg"> {/* ✅ background wrapper */}
      <div className="login-container">
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={subHandler}>
          <input
            type="text"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            name="password"
            className="form-control mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-danger" onClick={clearData}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <NavLink to="/forgotpassword">Forgot Password?</NavLink>
          <br />
          <NavLink to="/register">Create a new account!</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Admin;
