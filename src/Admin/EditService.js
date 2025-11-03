import React, { useEffect, useState } from 'react';
import adminStyles from './adminsStyles.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditService = () => {
  const { sid } = useParams();
  const navigate = useNavigate();

  const [sname, setSname] = useState('');
  const [sdesc, setSdesc] = useState('');
  const [image, setImage] = useState(null); // new image state
  const [currentImage, setCurrentImage] = useState(''); // current image from server
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:4000/service/${sid}`)
      .then(res => {
        setSname(res.data.sname);
        setSdesc(res.data.sdesc);
        setCurrentImage(res.data.image || '');
      })
      .catch(() => alert('Error fetching service'));
  }, [sid]);

  const updateServiceData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('sname', sname);
    formData.append('sdesc', sdesc);
    if (image) formData.append('image', image); // append new image if selected

    try {
      setLoading(true);
      await axios.put(`http://localhost:4000/service/${sid}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Service Updated Successfully');
      navigate('/admindashboard/deleteservice');
    } catch (err) {
      console.error(err);
      alert('Error while updating service');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={adminStyles.adminMain}>
      <section className={adminStyles.bread}>
        <div className="container">
          <h1>Edit Service</h1>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="col-md-6 mx-auto">
            <div className={adminStyles.bx_shadow}>
              <form onSubmit={updateServiceData}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Service Name"
                  value={sname}
                  onChange={(e) => setSname(e.target.value)}
                  required
                />
                <textarea
                  className="form-control mb-3"
                  placeholder="Service Description"
                  value={sdesc}
                  onChange={(e) => setSdesc(e.target.value)}
                  required
                ></textarea>

                {currentImage && (
                  <div className="mb-3">
                    <label>Current Image:</label>
                    <img
                      src={`http://localhost:4000/uploads/${currentImage}`}
                      alt="service"
                      style={{ width: 150, display: 'block', marginBottom: 10 }}
                    />
                  </div>
                )}

                <input
                  type="file"
                  className="form-control mb-3"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                />

                <button type="submit" className="btn btn-success" disabled={loading}>
                  {loading ? 'Updating...' : 'Update Service'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditService;
