import React from 'react'
import adminStyles from './adminsStyles.module.css'
import { useState } from 'react'
import axios from 'axios';


const AddService = () => {
  
    const [sname, setSname] = useState('');
    const [sdesc, setSdesc] = useState('');
    const addserviceData = (e) =>{
         e.preventDefault();
        axios
        .post(`http://localhost:4000/service`, { sname, sdesc })

        .then((res) =>{
            alert('Services added successfully');
            setSname('');
            setSdesc('');
        })
        .catch((err) =>{
        alert('Error while adding service');
        
        })
    }
 
  return (
    <main>
         <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className={adminStyles.bx_shadow}>
                <form onSubmit={addserviceData}>
                  <input type='text' name='sname' className='form-control mb-3' placeholder='Service Name' value={sname} onChange={(e) => setSname(e.target.value)} />
                  <textarea className='form-control mb-3' placeholder='Service Description' value={sdesc} onChange={(e) => setSdesc(e.target.value)}></textarea>
                  <input type='submit' value='Add Service' className='btn btn-success me-3' />
                </form>

         

              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default AddService