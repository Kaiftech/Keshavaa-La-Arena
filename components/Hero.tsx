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
          alt="Keshavaa La Arena" 
          fill 
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="hero-img"
          sizes="100vw"
        />
        {/* Cinematic Noir Depth */}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content" style={{ marginTop: '60px' }}>
          <span className="hero-eyebrow">LA ARENA</span>
          <h1 className="hero-headline">
             Private <br/><span>Escapism.</span>
          </h1>

          <div className="hero-actions">
             <a href="#enquire" className="btn-modern w-full md:w-auto text-center block">ENQUIRE NOW</a>
          </div>
        </div>
      </div>


      <style jsx>{`
        .hero-section {
           position: relative; height: 92vh; min-height: 700px;
           display: flex; align-items: center; justify-content: center;
           background: #000; overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; }
        .hero-img { 
          filter: brightness(0.55) saturate(0.85);
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

        .hero-container { position: relative; z-index: 30; text-align: center; width: 100%; max-width: 1200px; padding: 0 20px; }
        
        .hero-arch-ledger {
           display: flex; align-items: center; justify-content: center; gap: 15px;
           font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 0.5em; color: var(--accent-primary); margin-bottom: 40px;
           opacity: 0.7;
        }
        .dot-line { height: 1px; flex: 0 0 40px; background: var(--accent-primary); }

        .hero-eyebrow {
           display: block; font-family: var(--font-inter); font-size: 12px; font-weight: 800;
           letter-spacing: 0.8em; color: var(--accent-primary); margin-bottom: 25px;
           opacity: 0.8;
        }

        .hero-headline {
           font-family: var(--font-inter); font-size: 102px; font-weight: 300;
           line-height: 0.95; color: #fff; letter-spacing: -4px;
           margin-bottom: 45px; text-transform: capitalize;
        }
        .hero-headline span {
           font-family: var(--font-playfair); font-style: italic;
           color: var(--accent-glow);
        }
        
        .hero-actions { 
           display: flex; gap: 30px; justify-content: center; align-items: center;
           opacity: 0; animation: revealIn 1s 1s forwards;
           width: 100%; max-width: 400px; margin: 0 auto;
        }

        .btn-modern {
           background: var(--accent-primary); color: #000;
           padding: 20px 50px; font-family: var(--font-inter); font-weight: 900;
           font-size: 11px; letter-spacing: 4px; border-radius: 4px;
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

        @keyframes atmosphericZoom {
           from { transform: scale(1); }
           to { transform: scale(1.15); }
        }
        @keyframes revealIn {
           from { opacity: 0; transform: translateY(20px); }
           to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
           .hero-headline { font-size: 70px; }
           .corner-frame { display: none; }
        }
        @media (max-width: 768px) {
           .hero-section { min-height: 80vh; }
           .hero-headline { font-size: 60px; line-height: 1; margin-bottom: 40px; }
           .hero-actions { flex-direction: column; width: 100%; padding: 0 10px; }
           .btn-modern { padding: 20px; font-size: 12px; }
           .separator { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
