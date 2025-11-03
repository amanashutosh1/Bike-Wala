import React, { useState } from 'react'
import innertylees from './innerStylees.module.css'
import axios from 'axios';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [catname, setCatname] = useState('');

  const addProductData = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('image', image);
    formdata.append('catname', catname);

    try {
      await axios.post(`http://localhost:4000/uploads`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product Added Successfully");
      setImage(null);
      setCatname("");
    } catch (err) {
      console.error("Error adding Product:", err);
    }
  };

  return (
    <main>
      <section className={innertylees.bread}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Add Product Data</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 mx-auto'>
              <div className={innertylees.bx_shadow}>
                <form onSubmit={addProductData}>
                  <div className='mb-3'>
                    <input 
                      type='file' 
                      className='form-control' 
                      onChange={(e)=> setImage(e.target.files[0])} 
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <input 
                      type='text' 
                      name='catname' 
                      placeholder='Cat.Name' 
                      className='form-control' 
                      value={catname} 
                      onChange={(e)=> setCatname(e.target.value)} 
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <input 
                      type='submit' 
                      className='btn btn-success' 
                      value='Add Product' 
                    />
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

export default AddProduct
