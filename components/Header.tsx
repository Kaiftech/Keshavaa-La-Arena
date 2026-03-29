'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#hero">
            <Image 
              src="/assets/KESHAVAA LOGO.webp" 
              alt="Keshavaa Properties" 
              width={140} 
              height={45} 
              priority
            />
          </a>
        </div>
        
        <nav className="desktop-nav">
          <ul>
            <li><a href="#hero">OVERVIEW</a></li>
            <li><a href="#specs">SPECS</a></li>
            <li><a href="#amenities">AMENITIES</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#floorplans">FLOOR PLANS</a></li>
          </ul>
        </nav>

        <a href="#lead-form" className="btn-premium mobile-hide">GET BROCHURE</a>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: calc(100% - var(--sidebar-width));
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: var(--transition-smooth);
          background: #ffffff;
          border-bottom: 1px solid #f0f0f0;
        }

        .header.scrolled {
          height: 70px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-bottom: 2px solid var(--primary);
        }

        .header-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4%; /* Slightly less padding to gain more space */
        }

        .desktop-nav ul {
          display: flex;
          list-style: none;
          gap: 20px; /* Reduced gap from 35px */
        }

        .desktop-nav a {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.65rem; /* Slightly smaller for better fit */
          letter-spacing: 1.5px;
          color: var(--secondary);
          transition: var(--transition-fast);
          opacity: 0.7;
          text-decoration: none;
          white-space: nowrap; /* Prevent "FLOOR PLANS" from wrapping */
        }

        .desktop-nav a:hover {
          color: var(--primary);
          opacity: 1;
        }

        .mobile-hide {
          white-space: nowrap; /* Prevent "GET BROCHURE" from wrapping */
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .header {
            width: 100%;
            display: flex;
            justify-content: center;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          
          .desktop-nav, .mobile-hide {
            display: none;
          }

          .logo {
            transform: scale(0.9);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
