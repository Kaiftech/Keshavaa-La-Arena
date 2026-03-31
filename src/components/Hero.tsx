'use client';

import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <img src="/ASSESTS/exterior_luxury.png" alt="La Arena Luxury Exterior" className="hero-img" loading="eager" />
      <div className="hero-content">
        <span className="hero-tagline">Signature Coastal Living</span>
        <h1>Keshavaa La Arena</h1>
        <p>A serene riverfront address in Nerul, Goa.</p>
        <button className="btn btn-gold-filled" onClick={onOpenModal}>
          Enquire Now
        </button>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: var(--base-beige);
          overflow: hidden;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(245, 242, 237, 0.4), rgba(245, 242, 237, 0.2));
          z-index: 1;
        }
        .hero-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          animation: slowZoom 25s infinite alternate ease-in-out;
        }
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 0 24px;
        }
        .hero-tagline {
          display: block;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.6em;
          font-size: 0.75rem;
          margin-bottom: 24px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
        }
        .hero h1 {
          font-size: clamp(3rem, 11vw, 7rem);
          color: var(--dark-slate);
          margin-bottom: 20px;
          line-height: 0.95;
          text-shadow: 0 4px 15px rgba(255, 255, 255, 0.5);
        }
        .hero p {
          font-size: clamp(1.2rem, 4.5vw, 1.8rem);
          color: var(--dark-slate);
          margin-bottom: 45px;
          font-weight: 300;
          letter-spacing: 0.1em;
          opacity: 0.95;
        }
        @media (max-width: 768px) {
          .hero-tagline { letter-spacing: 0.3em; }
        }
      `}</style>
    </section>
  );
}
