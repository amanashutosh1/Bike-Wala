import React, { useState } from 'react';
import innerStylees from './innerStylees.module.css';
import axios from 'axios';

const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ Field validation
  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;
      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Enter a valid email";
        break;
      case "phone":
        if (!value.trim()) error = "Phone is required";
        else if (!/^\d{10}$/.test(value))
          error = "Enter a valid 10-digit phone number";
        break;
      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;
      case "message":
        if (!value.trim()) error = "Message is required";
        else if (value.length < 10)
          error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    return error === "";
  };

  // ✅ Whole form validation before submit
  const validateForm = () => {
    return (
      validateField("name", name) &
      validateField("email", email) &
      validateField("phone", phone) &
      validateField("subject", subject) &
      validateField("message", message)
    );
  };

  const contactUs = (e) => {
    e.preventDefault();
    if (loading) return;

    if (!validateForm()) return; // stop if invalid

    setLoading(true);

    axios.post("http://localhost:4000/contactus", {
      name,
      email,
      phone,
      subject,
      message,
    })
      .then(() => {
        alert("✅ Mail Sent Successfully");
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
        setErrors({});
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Error, Unable to Send Mail");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <section className={innerStylees.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>~Contact US~</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <form className={innerStylees.bx_shadow} onSubmit={contactUs}>
                {/* Name + Email */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        validateField("name", e.target.value);
                      }}
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateField("email", e.target.value);
                      }}
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        validateField("phone", e.target.value);
                      }}
                    />
                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        validateField("subject", e.target.value);
                      }}
                    />
                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                  </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      validateField("message", e.target.value);
                    }}
                  />
                  {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                {/* Submit with loader */}
                <div className="mb-3">
                  <button
                    type="submit"
                    className={`btn btn-success d-flex align-items-center justify-content-center gap-2 ${innerStylees.btn}`}
                    disabled={loading}
                  >
                    {loading && (
                      <div
                        className="spinner-border spinner-border-sm text-light"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-md-1"></div>
            <div className="col-md-4 p-5">
              <h5 className="text-success mb-3">Contact Details</h5>
              <p>Plot Number 40, Level 3</p>
              <p>Second Floor, Vital Rao Nagar</p>
              <p>Hitech City, Hyderabad</p>
              <p>Telangana 500081</p>
              <p>+91 8317741834</p>
              <p>info[@]amanashutosh18[.]com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUS;
