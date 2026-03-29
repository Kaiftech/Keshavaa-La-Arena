'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="branding">
            <Image 
              src="/assets/KESHAVAA LOGO.webp" 
              alt="Keshavaa Properties" 
              width={220} 
              height={80} 
            />
            <p>Luxury residential project developers dedicated to creating world-class living spaces in Goa.</p>
          </div>
          <div className="links">
            <h4 className="font-luxury">Quick Links</h4>
            <ul>
              <li><Link href="#hero">Overview</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="#floorplans">Floor Plans</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="font-luxury">Corporate Office</h4>
            <p>Goa, India</p>
            <p>+91 123 456 7890</p>
            <p>sales@keshavaa-properties.site</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Keshavaa Properties. All rights reserved.</p>
          <p>MahaRERA Registration No: PXXXXXXXX</p>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: #ffffff;
          color: var(--secondary);
          padding: 100px 0 40px;
          border-top: 1px solid #f0f0f0;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 60px;
        }

        .branding p {
          margin-top: 30px;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.8;
          max-width: 400px;
        }

        h4 {
          font-size: 0.85rem;
          margin-bottom: 25px;
          color: var(--primary);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .links ul {
          list-style: none;
        }

        .links li {
          margin-bottom: 15px;
        }

        .links a {
          color: var(--secondary);
          transition: var(--transition-fast);
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.7;
        }

        .links a:hover {
          color: var(--primary);
          opacity: 1;
        }

        .contact p {
          margin-bottom: 15px;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-bottom {
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #bbb;
          letter-spacing: 1px;
        }

        @media (max-width: 1024px) {
          .footer-section {
             padding: 60px 0 40px;
          }
          
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
