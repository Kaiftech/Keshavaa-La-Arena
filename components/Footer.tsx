'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand reveal">
            <div className="logo-wrap">
              <Image 
                src="/assets/keshavaa.blue1.png" 
                alt="Keshavaa Luxury" 
                width={160} 
                height={55} 
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
              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <MapPin size={14} className="contact-icon" strokeWidth={2.5} />
                  </div>
                  <span className="contact-text">Nerul, Goa</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <Phone size={14} className="contact-icon" strokeWidth={2.5} />
                  </div>
                  <a href="tel:+916262962621" className="contact-link">+91 6262 9 6262 1</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <MessageCircle size={14} className="contact-icon" strokeWidth={2.5} />
                  </div>
                  <a href="https://wa.me/916262962621" target="_blank" rel="noopener noreferrer" className="contact-link">WhatsApp</a>
                </div>
              </div>
              <div className="cta-area">
                 <a href="#enquire" className="footer-btn">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright reveal" style={{ animationDelay: '0.3s' }}>
          <span>© {new Date().getFullYear()} Keshavaa Developers.</span>
          <span>A KESHAVAA SIGNATURE</span>
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

        .legal-data {
          margin-top: 5px;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }
        
        .contact-item:last-child { border-bottom: none; }

        .contact-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .contact-icon {
          color: var(--accent-primary);
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .contact-link, .contact-text {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-family: var(--font-inter);
          font-size: 13px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }

        .contact-item:hover .contact-icon-wrap {
          background: var(--accent-primary);
        }

        .contact-item:hover .contact-icon {
          color: #fff;
          opacity: 1;
        }

        .contact-item:hover .contact-link {
          color: #fff;
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
           .footer-section { padding: 60px 0 30px; }
           .footer-grid { grid-template-columns: 1fr; gap: 40px; margin-bottom: 40px; }
           .copyright { flex-direction: column; gap: 10px; text-align: center; padding-top: 20px; }
           .brand-statement { font-size: 26px; margin-top: 15px; }
           .label { margin-bottom: 15px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
