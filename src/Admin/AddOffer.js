import React from 'react'
import adminStyles from './adminsStyles.module.css'
import { useState } from 'react'
import axios from 'axios';


const AddOffer = () => {
    const [oname, setOname] = useState('');
    const [odesc, setOdesc] = useState('');
    const addofferData = (e) =>{
         e.preventDefault();
        axios
        .post(`http://localhost:4000/offer`, { oname, odesc })

        .then((res) =>{
            alert('Offers added successfully');
            setOname('');
            setOdesc('');
        })
        .catch((err) =>{
        alert('Error while Adding Offer ');
        
        })
    }
 
  return (
    <main>
         <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className={adminStyles.bx_shadow}>
                <form onSubmit={addofferData}>
                  <input type='text' name='oname' className='form-control mb-3' placeholder='Offer Name' value={oname} onChange={(e) => setOname(e.target.value)} />
                  <textarea className='form-control mb-3' placeholder='Offer Description' value={odesc} onChange={(e) => setOdesc(e.target.value)}></textarea>
                  <input type='submit' value='Add Offer' className='btn btn-success mb-4' />
                </form>

         

              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default AddOffer