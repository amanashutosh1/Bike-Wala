import React, { useState } from 'react'
import adminStyles from './adminsStyles.module.css'
import axios from 'axios';


const AddSubService = () => {
      const [sname, setSname] = useState('');
      const [subsname, setSubsname] = useState('');
      const [subsdesc, setSubsdesc] = useState('');

      const AddSubServiceData = (e) =>{
        e.preventDefault ();
        axios.post(`http://localhost:4000/subservice`, {sname, subsname, subsdesc})

        .then((res) =>{
          alert("Sub Service added Successfully");
          setSname("");
          setSubsname("");
          setSubsdesc("");

        })
        .catch((err) =>{
          alert("Error while adding sub service")
        })
      }
  return (
  <main>
         <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className={adminStyles.bx_shadow}>
                <form onSubmit={AddSubServiceData}>
                  <input type='text' name='sname' className='form-control mb-3' placeholder='Service Name' value={sname} onChange={(e) => setSname(e.target.value)} />
                  <input type='text' name='subsname' className='form-control mb-3' placeholder='Sub Service Name' value={subsname} onChange={(e) => setSubsname(e.target.value)} />
                 <textarea className='form-control mb-3' placeholder='Sub Service Description' value={subsdesc} onChange={(e) => setSubsdesc(e.target.value)}></textarea>
                  <input type='submit' value='Add Sub Service' className='btn btn-success me-3' />
                </form>

         

              </div>
            </div>
          </div>
        </div>

      </section>
    </main>  )
}

export default AddSubService 