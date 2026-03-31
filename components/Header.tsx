'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="logo-wrap">
          <Image 
            src="/assets/KESHAVAA LOGO.webp" 
            alt="Keshavaa Luxury" 
            width={130} 
            height={45} 
            priority
            className={`${!scrolled ? 'invert' : ''}`}
          />
        </Link>
        
        <nav className="nav-menu">
          <Link href="#hero">COLLECTION</Link>
          <div className="dot" />
          <Link href="#amenities">LIFESTYLE</Link>
          <div className="dot" />
          <Link href="#gallery">ARCHIVE</Link>
          <div className="dot" />
          <Link href="#floorplans">LAYOUTS</Link>
        </nav>

        <div className="header-actions">
           <a href="#enquire" className="btn-header">SECURE ACCESS</a>
        </div>
      </div>

      <style jsx>{`
        .modern-header {
           position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
           padding: 40px 0; transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modern-header.scrolled {
           padding: 15px 0; background: rgba(255, 255, 255, 0.9);
           backdrop-filter: blur(25px); border-bottom: 1px solid rgba(32, 178, 170, 0.08);
           box-shadow: 0 5px 30px rgba(8, 22, 23, 0.03);
        }
        .header-inner {
           display: flex; align-items: center; justify-content: space-between;
        }

        .logo-wrap { transition: transform 0.4s; }
        .logo-wrap:hover { transform: scale(1.05); }

        .nav-menu {
           display: flex; gap: 30px; align-items: center;
        }
        .dot { width: 3px; height: 3px; border-radius: 50%; background: var(--accent-primary); opacity: 0.3; }

        .nav-menu :global(a) {
           font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 0.4em; text-transform: uppercase; text-decoration: none;
           color: ${scrolled ? 'var(--text-primary)' : '#ffffff'};
           transition: color 0.4s, opacity 0.4s;
           opacity: 0.6;
        }
        .nav-menu :global(a:hover) {
           color: var(--accent-primary); opacity: 1;
        }

        .btn-header {
           background: ${scrolled ? 'var(--bg-deep)' : 'var(--accent-primary)'};
           color: #fff; padding: 12px 24px; border-radius: 4px; border: none;
           font-family: var(--font-inter); font-size: 10px; font-weight: 900;
           letter-spacing: 0.3em; text-decoration: none; transition: all 0.3s;
           text-transform: uppercase;
        }
        .btn-header:hover {
           background: var(--accent-glow); transform: translateY(-2px);
           box-shadow: 0 5px 15px rgba(32, 178, 170, 0.2);
        }

        @media (max-width: 1024px) {
           .nav-menu { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
