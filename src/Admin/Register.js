import React, { useState } from 'react'
import adminStyles from './adminsStyles.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
        const[name, setName]=useState('');
        const[email, setEmail]=useState('');
        const[password, setPassword ]=useState('');
        const[phone, setphone]=useState('');
        const[address, setAddress]=useState('');
        const navigate = useNavigate();

       const adminRegister=(e)=>{
        e.preventDefault();
        axios
        .post(`http://localhost:4000/register`, { name, email, password, phone, address })
        .then((res) =>{
            alert('Admin Register Successfully');
            navigate('/admin')
        })
        .catch((err) =>{
        alert('Error registering:');
        
        })
       }

  return (
 <main className={adminStyles.adminMain}>
          <section className= {adminStyles.bread}>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <h1>Admin Register</h1>
                                    </div>
                                </div>
                            </div>
                    
                        </section>
                         <section className='py-4'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-md-4 mx-auto'>
                                              <div className={adminStyles.bx_shadow}>
                                                <form  onSubmit={adminRegister}>
                                                  <div className='mb-3'>
                                                    <input type='text' name='name' placeholder='Enter Name' className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
                                                  </div>
                                                  <div className='mb-3'>
                                                    <input type='text' name='email' placeholder='Email' className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)} />
                                                  </div>
                                                  <div className='mb-3'>                                                    
                                                    <input type='text' name='password' placeholder='Password' className='form-control' value={password} onChange={(e)=> setPassword(e.target.value)} />
                                                    </div>
                                                   <div className='mb-3'>
                                                    <input type='text' name='phone' placeholder='Phone Number' className='form-control' value={phone} onChange={(e)=>setphone(e.target.value)} />
                                                  </div>
                                                   <div className='mb-3'>
                                                    <input type='text' name='address' placeholder='Address' className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)} />
                                                  </div>
                                                   <div className='mb-3'>
                                                    <input type='submit' className='btn btn-success' value='Register Admin' />
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                </section>
                        </main>
                          )
}

export default Register