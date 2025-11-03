import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/forgotpassword", { email })
      .then((res) => {
        setMessage("Password reset link sent to your email.");
      })
      .catch((err) => {
        setMessage("Error sending reset link. Try again.");
      });
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <button type="submit" className="btn btn-primary">
              Send Reset Link
            </button>
          </form>
          {message && <p className="mt-3">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
