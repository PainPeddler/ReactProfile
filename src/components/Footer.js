import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; //icons for links

const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="social-icons">
            <a
              href="https://github.com/PainPeddler"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/me" //I dont have a linkedIn
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/SectMK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="footer-links">
            <a
              href="woo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Third Platform
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;  