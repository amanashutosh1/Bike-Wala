import React, { useEffect } from 'react'
import adminStyles from './adminsStyles.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const EditOffer = () => {
      const [oname, setOname] = useState(''); 
      const [odesc, setOdesc] = useState('');
          const { sid } = useParams();
          
          const navigate = useNavigate();
        useEffect(() =>{
          axios
          .get(`http://localhost:4000/offer/${sid}`)
          .then((res) =>{
            setOname(res.data.oname);
            setOdesc(res.data.odesc);            
          })
          .catch((err) =>{
            alert('Error fetching services')
          })
        },[])

        const updateOfferData = (e) =>{
            e.preventDefault();
            axios.put(`http://localhost:4000/offer/${sid}`, {oname, odesc })
            .then((res) =>{
                alert("Offer Updated Successfully")
                navigate("/admindashboard/deleteoffer")
            })
            .catch((err) =>{
                alert("Error while updating Offer")
            })
        }


  return  <main className={adminStyles.adminMain}>
        <section className={adminStyles.bread}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1> Edit Offer.</h1>
              </div>
            </div>
          </div>
  
        </section>
         <section className='p-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 mx-auto'>
                      <div className={adminStyles.bx_shadow}>
                        <form onSubmit={updateOfferData}>
                          <input type='text' name='oname' className='form-control mb-3' placeholder='Offer Name' value={oname} onChange={(e) => setOname(e.target.value)} />
                          <textarea className='form-control mb-3' placeholder='Offer Description' value={odesc} onChange={(e) => setOdesc(e.target.value)}></textarea>
                          <input type='submit' value='Update Offer' className='btn btn-success mb-3' />
                        </form>
        
                 
        
                      </div>
                    </div>
                  </div>
                </div>
        
              </section>
     </main>
  
}

export default EditOffer