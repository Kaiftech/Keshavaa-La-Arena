'use client';

import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container top-bar-content">
        <div className="logo">
          <img src="/ASSESTS/KESHAVAA LOGO.webp" alt="Keshavaa Logo" loading="lazy" style={{ height: '40px' }} />
        </div>
        <div className="top-bar-right">
          <a href="tel:+916262962621" className="phone-link">
            +91 62629 62621
          </a>
          <button className="btn btn-gold-filled" onClick={onOpenModal}>
            Book a Site Visit
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .top-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: transparent;
          padding: 24px 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
        }
        .top-bar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          padding: 14px 0;
          box-shadow: 0 10px 30px rgba(30, 41, 59, 0.08);
          border-bottom: 1px solid rgba(0, 209, 193, 0.05);
        }
        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 25px;
        }
        .phone-link {
          color: var(--dark-slate);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .phone-link:hover {
          color: var(--bright-aqua);
        }
        @media (max-width: 768px) {
          .top-bar .btn { display: none; }
          .top-bar { padding: 18px 0; }
        }
      `}</style>
    </header>
  );
}
