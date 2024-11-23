import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Optional: Add your styles here
import { BrandLogo } from './svgindex';

const FooterComp = () => {

  const handleEmailClick = (id) => {
    window.location.href = `mailto:${id}?subject=Subject&body=Body`;
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Company Logo and Name */}
        <div className="footer-logo">
            {/* <div className="brand-logo">
            <BrandLogo />
            </div> */}
          <h3 className="footer-company-name">Lawmen Alliance</h3>
        </div>

        {/* Social Links */}
        <div className="footer-social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {false && <div className="footer-links">
        {/* Column-wise Links */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li onClick={()=>handleEmailClick("singhvikramabhijeet@lawmenalliance.com")} ><a href="">Contact us</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lawmen Alliance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComp;
