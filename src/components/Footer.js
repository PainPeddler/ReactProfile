import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/PainPeddler" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
