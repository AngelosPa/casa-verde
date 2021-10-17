import React from 'react';
import { Link } from 'react-router-dom';

// Only About and Contact pages links are working for the moment
// The other are not created

const Footer = () => {
  let now = new Date();
  let year = now.getFullYear();
  return (
    <footer
      style={{
        textAlign: 'center',
        position: 'relative',
        bottom: '20px',
        left: '50vw',
        transform: 'translateX(-50%)',
      }}
    >
      <ul>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact Page</Link>
        </li>
        <li>
          <Link to={'/impressum'}>Impressum</Link>
        </li>
        <li>
          <Link to={'/agb'}>AGB's</Link>
        </li>
        <li>
          <Link to={'/datenschutzerklaerung'}>Datenschutzerklärung</Link>
        </li>
        <li>
          <Link to={'/widerrufsbelehrung'}>Widerrufsbelehrung</Link>
        </li>
        <li>
          <Link to={'/zahlung-versand'}>Zahlung & Versand</Link>
        </li>
        <li>
          <Link to={'/sm'}>Social Media (not complete for now)</Link>
        </li>
      </ul>
      <div className="--footer-main-container">
        Made with ❤️ by team Casa Verde
      </div>{' '}
      <div className="--footer-secondary-container">
        All copyrights reserved Ⓒ {year} Casa Verde
      </div>
    </footer>
  );
};

export default Footer;
