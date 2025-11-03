import React, { useEffect, useState } from 'react'
import innertylees from './innerStylees.module.css'
import axios from 'axios';

const ProductData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/uploads`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        alert("Unable to fetch product data");
      })
  }, []);

  return (
    <main>
      <section className={innertylees.bread}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Product Data</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className='container'>
          <div className='row'>
            {
              data.map((products) => {
                return (
                  <div className='col-md-3 col-sm-6 mb-4' key={products._id}>
                    <div className='card h-100 text-center shadow-sm'>
                      <img
                        src={`http://localhost:4000/uploads/${products.filename}`}
                        className='card-img-top'
                        alt={products.catname}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className='card-body'>
                        <h6 className='card-title'>{products.catname}</h6>
                      </div>
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

export default ProductData;
