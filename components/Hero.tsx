'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <Image 
          src="/assets/bulding1.png" 
          alt="Keshavaa La Arena Goa - Luxury River-Facing 1-4 BHK Apartments in Nerul" 
          fill
          priority
          loading="eager"
          style={{ objectFit: 'cover' }}
          sizes="100vw"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="animate-fade-up">Keshavaa La Arena Goa</h1>
        <p className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Ultra-Luxury River-Facing Residential Project in Nerul
        </p>
        <div className="hero-cta animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn-premium">DOWNLOAD BROCHURE</button>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: var(--header-height) 5% 0;
          position: relative;
          overflow: hidden;
        }

        .hero-bg, .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-overlay {
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3));
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 800px;
          color: white;
          z-index: 10;
        }

        h1 {
          font-size: clamp(3.5rem, 8vw, 6rem);
          margin-bottom: 20px;
          letter-spacing: 5px;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 40px;
          letter-spacing: 2px;
          text-transform: uppercase;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .hero-section {
            background-position: 70% center;
            justify-content: center;
            text-align: center;
          }
          
          h1 {
            font-size: 3rem;
          }
          
          p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
