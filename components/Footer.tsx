'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand reveal">
            <div className="logo-wrap">
              <Image 
                src="/assets/KESHAVAA LOGO.webp" 
                alt="Keshavaa Luxury" 
                width={160} 
                height={55} 
                className="invert"
              />
            </div>
            <h3 className="brand-statement">Crafting <span>Legacies</span> <br/>In Nerul, Goa.</h3>
          </div>
          
          <div className="footer-nav reveal" style={{ animationDelay: '0.1s' }}>
            <span className="label">NAVIGATE</span>
            <ul className="footer-links">
              <li><Link href="#hero">Collection</Link></li>
              <li><Link href="#amenities">Lifestyle</Link></li>
              <li><Link href="#gallery">Archive</Link></li>
            </ul>
          </div>
          
          <div className="footer-legal reveal" style={{ animationDelay: '0.2s' }}>
            <span className="label">CONTACT</span>
            <div className="legal-data">
              <p>Nerul Riviera, Goa</p>
              <p>sales@keshavaa-properties.site</p>
              <div className="cta-area">
                 <a href="#enquire" className="footer-btn">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright reveal" style={{ animationDelay: '0.3s' }}>
          <span>© {new Date().getFullYear()} Keshavaa Developers.</span>
          <span>MAHARERA: PXXXXXXXX</span>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
           background: var(--bg-deep);
           padding: 100px 0 60px;
           color: #fff;
        }
        .footer-grid {
           display: grid; grid-template-columns: 2fr 1fr 1fr;
           gap: 80px; margin-bottom: 80px;
        }

        .brand-statement {
           font-family: var(--font-playfair); font-size: 32px;
           line-height: 1.2; font-weight: 400; color: #fff;
           margin-top: 30px;
        }
        .brand-statement span { font-style: italic; color: var(--accent-primary); }

        .label {
           display: block; font-family: var(--font-inter); font-size: 10px;
           font-weight: 800; letter-spacing: 4px; color: var(--accent-primary);
           margin-bottom: 25px; text-transform: uppercase;
        }

        .footer-links { list-style: none; padding: 0; margin: 0; }
        .footer-links li { margin-bottom: 15px; }
        .footer-links :global(a) {
           color: rgba(255,255,255,0.6) !important; text-decoration: none !important;
           font-family: var(--font-inter); font-size: 13px; transition: color 0.3s;
        }
        .footer-links :global(a:hover) { color: var(--accent-primary) !important; }

        .legal-data p {
           font-family: var(--font-inter); font-size: 14px;
           color: rgba(255,255,255,0.6); margin-bottom: 10px;
        }

        .cta-area { margin-top: 25px; }
        .footer-btn {
           background: var(--accent-primary); color: var(--bg-deep);
           padding: 12px 24px; border-radius: 4px; text-decoration: none;
           font-family: var(--font-inter); font-size: 10px; font-weight: 900;
           letter-spacing: 2px; text-transform: uppercase; transition: transform 0.3s;
           display: inline-block;
        }
        .footer-btn:hover { transform: translateY(-3px); background: #fff; }

        .copyright {
           padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1);
           display: flex; justify-content: space-between;
           font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.3);
        }

        @media (max-width: 768px) {
           .footer-grid { grid-template-columns: 1fr; gap: 50px; }
           .copyright { flex-direction: column; gap: 15px; text-align: center; }
           .brand-statement { font-size: 26px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
