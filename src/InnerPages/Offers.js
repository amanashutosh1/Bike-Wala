import React, { useEffect, useState } from 'react'
import innerStylees from './innerStylees.module.css'
import axios from 'axios'

const Offers = () => {
    const [data, setData]= useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:4000/offer`)
    .then((res) =>{
      setData(res.data);
      
    })
    .catch((err) =>{
      alert('Error fetching services')
    })
  })
  return (
 <main>
           <section className={innerStylees.bread}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1>~Offer~</h1>
                            </div>
                        </div>
                    </div>
            
                </section>
                 <section className={`py-4 ${innerStylees.AboutUS}`}>
                            <div className='container'>
                                <div className='row'>
                                   {
                                    data.map((offerdata ) =>{
                                     return(
                                      <div className='col-md-12' key={offerdata._id}>
                                        <div className=' border-bottom mb-4'>
                                          <p>{offerdata.odesc}</p>
                                        </div>
                                      </div>
                                     )
                                    })
                                   }
                                </div>
                            </div>
                    
                        </section>
    </main>  
    )  
}

export default Offers 