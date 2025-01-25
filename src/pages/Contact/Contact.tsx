import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <h5>I'd love to be in touch!</h5>
      <p>
        <a href="mailto:info@trainwithamandajane.com">Email Me</a>
      </p>
      <h6>Find Me On</h6>
      <ul>
        <li>
          <a 
            href="http://www.instagram.com/trainwithamandajane" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a 
            href="http://tiktok.com/trainwithamandajane" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            TikTok
          </a>
        </li>
        <li>
          <a 
            href="http://www.facebook.com/AmandaJaneSnyder" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a 
            href="https://www.youtube.com/user/AJS621" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
