import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div className="input-field">
          <input type="text" id="name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field">
          <input type="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <textarea id="message" className="materialize-textarea"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
