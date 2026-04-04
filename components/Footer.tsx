'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

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
            <h3 className="brand-statement">Crafting <span>Legacies</span> <br />In Nerul, Goa.</h3>
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
                  <a 
                    href="tel:+916262962621" 
                    className="contact-link"
                    onClick={() => {
                      if (typeof (window as any).gtag_report_conversion !== 'undefined') {
                        (window as any).gtag_report_conversion('tel:+916262962621');
                      }
                    }}
                  >
                    +91 6262 9 6262 1
                  </a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <a href="https://wa.me/916262962621" target="_blank" rel="noopener noreferrer" className="contact-link">+91 6262 9 6262 1</a>
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
          <span>Goa RERA Registered : PRGO9252540 </span>
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
