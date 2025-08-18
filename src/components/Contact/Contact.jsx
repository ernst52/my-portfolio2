// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? 
        </p>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className="contact-channels">
            <p>Thanks! Connect with me:</p>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} color="#0077b5" />
            </a>
            <a
              href="https://x.com/Pantsufeet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={40} color="#1DA1F2" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;