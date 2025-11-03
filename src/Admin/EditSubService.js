import React, { useEffect } from 'react'
import adminStyles from './adminsStyles.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const EditSubService = () => {
         const [sname, setSname] = useState('');
          const [subsname, setSubsname] = useState('');
          const [subsdesc, setSubsdesc] = useState('');
    
          const { sid } = useParams();
          
          const navigate = useNavigate();
        useEffect(() =>{
          axios
          .get(`http://localhost:4000/subservice/${sid}`)
          .then((res) =>{
            setSname(res.data.sname);
            setSubsname(res.data.subsname);
            setSubsdesc(res.data.subsdesc)            
          })
          .catch((err) =>{
            alert('Error fetching Sub Services')
          })
        }, [])

        const updateSubServiceData = (e) =>{
            e.preventDefault();
            axios.put(`http://localhost:4000/subservice/${sid}`, {sname, subsname, subsdesc })
            .then((res) =>{
                alert("Sub Service Updated Successfully")
                navigate("/admindashboard/subdeleteservices")
            })
            .catch((err) =>{
                alert("Error while updating Sub Service")
            })
        }


  return  <main className={adminStyles.adminMain}>
        <section className={adminStyles.bread}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1> Edit Sub Service.</h1>
              </div>
            </div>
          </div>
  
        </section>
         <section className='p-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6 mx-auto'>
                      <div className={adminStyles.bx_shadow}>
                          <form onSubmit={updateSubServiceData}>
                  <input type='text' name='sname' className='form-control mb-3' placeholder='Service Name' value={sname} onChange={(e) => setSname(e.target.value)} />
                  <input type='text' name='subsname' className='form-control mb-3' placeholder='Sub Service Name' value={subsname} onChange={(e) => setSubsname(e.target.value)} />
                 <textarea className='form-control mb-3' placeholder='Sub Service Description' value={subsdesc} onChange={(e) => setSubsdesc(e.target.value)}></textarea>
                  <input type='submit' value='Update Sub Service' className='btn btn-success me-3' />
                </form>
        
                 
        
                      </div>
                    </div>
                  </div>
                </div>
        
              </section>
     </main>
  
}

export default EditSubService