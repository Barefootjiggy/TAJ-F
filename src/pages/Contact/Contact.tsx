import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <img src="/AmandaPose.jpg" alt="Amanda posing" className="contact-image" /> {/* ✅ Uses image from public/ */}
    </div>
  );
}

export default Contact;
