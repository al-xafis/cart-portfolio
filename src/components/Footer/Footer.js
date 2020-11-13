import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer__socials">
          <a><i className="fab fa-twitter"></i></a>
          <a><i className="fab fa-facebook-f"></i></a>
          <a id="last-child"><i className="fab fa-github-alt"></i></a>
          <img src="/pics/footer-logo.png" alt="footer logo" />
        </div>
        <div className="footer__navigation">
          <h5>Company</h5>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link">About</a>
              </li>
              <li className="footer__item">
                <a className="footer__link">Partnership program</a>
              </li>
              <li className="footer__item">
                <a className="footer__link">Terms of service</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer_bottom">

      </div>
    </div>
  )
};

export default Footer;
