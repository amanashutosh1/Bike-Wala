import React, { useState } from 'react'
import innerStylees from './innerStylees.module.css'
import axios from 'axios';


const BookServices = () => {
  const [sname, setSname] = useState('');
  const [subsname, setSubsname] = useState('');
  const [spname, setSpname]= useState('');
  const [cname, setCname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const addservicedata = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:4000/bookservice", {sname, subsname, spname, cname, email, phone,  address  })
    .then((re) =>{
      alert('Service Booked');
      setSname('');
      setSubsname('');
      setSpname('');
      setCname('');
      setEmail('');
      setPhone('');
      setAddress('');

    })
    .catch((err) => {
      alert('Error Booking Service');
    })
  }
  return  <main>
           <section className={innerStylees.bread}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1>~Book Services~</h1>
                            </div>
                        </div>
                    </div>
            
                </section>
                <section className='py-5'>
                  <div className='container'>
                    <div className='row'>
                     <div className='col-md-7 mx-auto'>
                      <form className={innerStylees.bx_shadow} onSubmit={addservicedata}>
                        <div className='row'>
                         <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='text' name='sname' className='form-control' placeholder='Service Name' value={sname} onChange={(e)=> setSname(e.target.value)}></input>
                          </div>
                         </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='text' name='subsname' className='form-control' placeholder='Sub-Service Name' value={subsname} onChange={(e) => setSubsname(e.target.value)}></input>
                          </div>
                         </div>
                         
                        </div>

                         <div className='row'>
                         <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='text' name='spname' className='form-control' placeholder='Service P.Name' value={spname} onChange={(e) => setSpname(e.target.value)}></input>
                          </div>
                         </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='text' name='csname' className='form-control' placeholder='C.Name' value={cname} onChange={(e)=> setCname(e.target.value)}></input>
                          </div>
                         </div>
                         
                        </div>

                        <div className='row'>
                         <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='text' name='email' className='form-control' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                          </div>
                         </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='text' name='phone' className='form-control' placeholder='Phone' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
                          </div>
                         </div>
                         
                        </div>

                        <div className='row'>
                         <div className='col-md-12'>
                          <div className='mb-3'>
                            <textarea  name='address' className='form-control' placeholder='Message' rows='5' value={address} onChange={(e)=> setAddress(e.target.value)}></textarea>
                          </div>
                         </div>
                          <div className='col-md-6'>
                          <div className='mb-3'>
                            <input type='submit' value='Book Service' className={`btn btn-primary ${innerStylees.btn}`}></input>
                          </div>
                         </div>
                         
                        </div>

                        

                        



                      </form>
                     </div>
                    </div>
                  </div>
                </section>
                
                  
</main>
}


export default BookServices 