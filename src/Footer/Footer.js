import React from "react";
import footerStyle from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${footerStyle.footer} animate__animated animate__fadeInUp`}>
      <div className="container">
        <div className="row">
          {/* About Me Section */}
          <div className="col-md-6">
            <h5 className="animate__animated animate__fadeInLeft">About Me</h5>
            <p className="animate__animated animate__fadeInLeft animate__delay-1s">
              Hi, I’m <strong>राणा साहब</strong> 👨‍💻, a passionate developer who
              loves building modern web applications with React, Node.js and
              creative UI designs. 🚀
            </p>
          </div>

          {/* Contact + Social Links */}
          <div className="col-md-6 text-md-end text-center">
            <h5 className="animate__animated animate__fadeInRight">Connect with me</h5>
            <div className={footerStyle.socialLinks}>
              <a href="https://www.instagram.com/hello.ranasahab?igsh=eWp1YzY4NjBxbjRx" target="_blank" rel="noreferrer">🌐 Instagram</a>
              <a href="mailto:amanashutosh18@gmail.com">📧 Email</a>
                   {/* WhatsApp Link */}
              <a
                href="https://wa.me/qr/OBK7XJ7PPOH2F1"
                target="_blank"
                rel="noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>&copy; 2025 All Rights Reserved | Developed by <strong>राणा साहब</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
