import React, { useEffect } from 'react'
  import innertylees from './innerStylees.module.css'
  import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const StudentEdit = () => {
        const[name,setName] = useState('');
        const[email,setEmail] = useState('');
        const[phone,setphone] = useState('');
        const[address,setAddress] = useState('');
        const {stu} = useParams(); 
        const navigate = useNavigate ()

        useEffect(() =>{
            axios
            .get(`http://localhost:4000/student/${stu}`)
            .then(res =>{
                setName(res.data.name)
                setEmail(res.data.email)
                setphone(res.data.phone)
                setAddress(res.data.address)                
            })
            .catch( err =>{
                alert('Unable to fetch Student Data')
            })
        },[])
        
        const StudentDataEdit = (e) =>{
            e.preventDefault();
            axios
            .put(`http://localhost:4000/student/${stu}`, {name, email, phone, address})
            .then((res)  =>{
                alert('Student Data Upadted Successfully')
              navigate ('/editstudent')

            })
           .catch((err) =>{
            alert('Unable to update Student Data')
           })
        }
  return (
        <main>
          <section className={innertylees.bread}>
              <div className='container'>
                  <div className='row'>
                      <div className='col-md-12'>
                          <h1>~Edit Student~ </h1>
                      </div>
                  </div>
              </div>
      
          </section>

           <section className='py-5'>
                      <div className='container'>
                          <div className='row'>
                              <div className='col-md-4 mx-auto'>
                                <div className={innertylees.bx_shadow}>
                                  <form>
                                    <div className='mb-3'>
                                      <input type='text' name='name' placeholder='Enter Name' className='form-control' value={name} onChange={(e)=> setName(e.target.value)}/>
                                    </div>
                                    <div className='mb-3'>
                                      <input type='text' name='email' placeholder='Email' className='form-control' value={email} onChange={(e)=> setEmail(e.target.value)} />
                                    </div>
                                     <div className='mb-3'>
                                      <input type='text' name='phone' placeholder='Phone Number' className='form-control' value={phone} onChange={(e)=>setphone(e.target.value)} />
                                    </div>
                                     <div className='mb-3'>
                                      <input type='text' name='address' placeholder='Address' className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)} />
                                    </div>
                                     <div className='mb-3'>
                                      <input type='button' className='btn btn-success' value='Update Student' onClick={StudentDataEdit} />
                                    </div>
                                  </form>
                                </div>
                              </div>
                          </div>
                      </div>
              
                  </section>
          </main>
);

};

export default StudentEdit