import React from 'react';
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Founded in 2023, Cust Ts® is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Cust Ts® was created on the principle of creating impact through innovation, honesty and thoughtfulness.</p>
          </div>
          <div className="footer-column">
            <h3>Quick Switch</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/menfashion">Men</a>
              </li>
              <li>
                <a href="/womenfashion">Women</a>
              </li>
              <li>
                <a href="/accessories">Accessories</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="https://twitter.com">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cust Ts. Created By Manish All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


