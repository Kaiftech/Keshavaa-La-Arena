'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Immersive Background Visual */}
      <div className="hero-bg">
        <Image 
          src="/assets/bulding3.png" 
          alt="Keshavaa Riviera" 
          fill 
          priority
          className="hero-img"
        />
        {/* Cinematic Noir Depth */}
        <div className="hero-overlay" />
      </div>

      {/* Architectural Fine-Line Details */}
      <div className="corner-frame top-left" />
      <div className="corner-frame top-right" />
      <div className="corner-frame bottom-left" />
      <div className="corner-frame bottom-right" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-arch-ledger">
             <span>ARCHIVE-032</span>
             <div className="dot-line" />
             <span>GOA PROJECT</span>
          </div>

          <h1 className="hero-headline">
             Private <br/><span>Escapism.</span>
          </h1>
          
          <p className="hero-desc">
             Bespoke riverfront residences reflecting the serene turquoise soul of Goa. 
             A Keshavaa Signature Estate.
          </p>

          <div className="hero-actions">
             <a href="#enquire" className="btn-modern">ENQUIRE NOW</a>
             <div className="separator" />
             <a href="#gallery" className="btn-ghost">VIEW GALLERY</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Ultra Delicate */}
      <div className="scroll-hint">
        <div className="mouse">
           <div className="wheel" />
        </div>
        <span>SCROLL TO DISCOVER</span>
      </div>

      <style jsx>{`
        .hero-section {
           position: relative; height: 92vh; min-height: 700px;
           display: flex; align-items: center; justify-content: center;
           background: #000; overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-img { 
          object-fit: cover; filter: brightness(0.55) saturate(0.85);
          animation: atmosphericZoom 30s infinite alternate linear;
        }
        .hero-overlay {
           position: absolute; inset: 0;
           background: linear-gradient(to bottom, 
              rgba(8,22,23,0.95) 0%, 
              rgba(8,22,23,0.3) 50%, 
              rgba(8,22,23,0.1) 80%, 
              rgba(8,22,23,1) 100%
           );
           z-index: 10;
        }

        /* Fine-Line Architectural Polish */
        .corner-frame {
           position: absolute; width: 60px; height: 60px;
           border-color: var(--accent-primary); opacity: 0.15; z-index: 50;
           pointer-events: none;
        }
        .top-left { top: 30px; left: 30px; border-top: 1px solid; border-left: 1px solid; }
        .top-right { top: 30px; right: 30px; border-top: 1px solid; border-right: 1px solid; }
        .bottom-left { bottom: 30px; left: 30px; border-bottom: 1px solid; border-left: 1px solid; }
        .bottom-right { bottom: 30px; right: 30px; border-bottom: 1px solid; border-right: 1px solid; }

        .hero-container { position: relative; z-index: 30; text-align: center; }
        
        .hero-arch-ledger {
           display: flex; align-items: center; justify-content: center; gap: 15px;
           font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 0.5em; color: var(--accent-primary); margin-bottom: 40px;
           opacity: 0.7;
        }
        .dot-line { height: 1px; flex: 0 0 40px; background: var(--accent-primary); }

        .hero-headline {
           font-family: var(--font-inter); font-size: 92px; font-weight: 300;
           line-height: 0.95; color: #fff; letter-spacing: -4px;
           margin-bottom: 35px; text-transform: capitalize;
        }
        .hero-headline span {
           font-family: var(--font-playfair); font-style: italic;
           color: var(--accent-glow);
        }
        
        .hero-desc {
           font-family: var(--font-inter); font-size: 17px; line-height: 1.7;
           color: rgba(255,255,255,0.7); max-width: 650px; margin: 0 auto 50px;
           letter-spacing: 0.01em; opacity: 0; animation: revealIn 1s 0.8s forwards;
        }

        .hero-actions { 
           display: flex; gap: 30px; justify-content: center; align-items: center;
           opacity: 0; animation: revealIn 1s 1s forwards;
        }
        .btn-modern {
           background: var(--accent-primary); color: #000;
           padding: 20px 50px; font-family: var(--font-inter); font-weight: 900;
           font-size: 10px; letter-spacing: 4px; border-radius: 4px;
           text-decoration: none; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
        }
        .btn-modern:hover { transform: translateY(-5px); background: #ffffff; box-shadow: 0 15px 30px rgba(32, 178, 170, 0.2); }

        .separator { width: 1px; height: 30px; background: rgba(255,255,255,0.1); }

        .btn-ghost {
           color: #fff; font-family: var(--font-inter); font-weight: 800;
           font-size: 10px; letter-spacing: 4px; text-decoration: none;
           padding: 10px; opacity: 0.5; transition: opacity 0.3s;
        }
        .btn-ghost:hover { opacity: 1; }

        .scroll-hint {
           position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
           display: flex; flex-direction: column; align-items: center; gap: 15px;
           z-index: 40; opacity: 0.4;
        }
        .mouse {
           width: 24px; height: 40px; border: 1px solid #fff; border-radius: 20px;
           position: relative;
        }
        .wheel {
           width: 2px; height: 8px; background: #fff; border-radius: 2px;
           position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
           animation: mouseMove 2s infinite ease-in-out;
        }
        .scroll-hint span {
           font-size: 9px; letter-spacing: 3px; color: #fff; font-weight: 800;
        }

        @keyframes atmosphericZoom {
           from { transform: scale(1); }
           to { transform: scale(1.15); }
        }
        @keyframes revealIn {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
        }
        @keyframes mouseMove {
           0% { opacity: 0; transform: translate(-50%, 0); }
           50% { opacity: 1; transform: translate(-50%, 10px); }
           100% { opacity: 0; transform: translate(-50%, 20px); }
        }

        @media (max-width: 1024px) {
           .hero-headline { font-size: 70px; }
           .corner-frame { display: none; }
        }
        @media (max-width: 768px) {
           .hero-headline { font-size: 48px; }
           .hero-actions { flex-direction: column; gap: 20px; }
           .separator { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
