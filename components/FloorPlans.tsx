'use client';

import React from 'react';
import Image from 'next/image';

const FloorPlans = () => {
  const plans = [
    { title: 'Typical Floor Plan', src: '/assets/floor plan.jpg' },
    { title: 'Penthouse Floor Plan', src: '/assets/floor plan penthouse.jpg' },
    { title: 'Attic Floor Plan', src: '/assets/floor plan attic.jpg' }
  ];

  const handlePlanClick = (e: React.MouseEvent) => {
    // Popup.tsx global listener handles transitions
  };

  return (
    <section id="floorplans" className="floorplans-section">
      <div className="container">
        <h2 className="title-underline">Tailored Living Spaces</h2>
        <p className="section-description">Meticulously designed layouts for a bespoke lifestyle. Click any plan to enquire.</p>
        
        <div className="plans-grid">
          {plans.map((plan, i) => (
            <div key={i} className="plan-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="plan-image-container" onClick={handlePlanClick}>
                <Image 
                  src={plan.src} 
                  alt={`${plan.title} - La Arena Goa Layout`} 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="blur-image"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="view-overlay">
                  <button className="btn-premium btn-view">CLICK HERE TO VIEW</button>
                </div>
              </div>
              <h4 className="font-luxury">{plan.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .floorplans-section {
          background: #ffffff;
          text-align: center;
        }

        .section-description {
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 50px;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .plan-card {
           border-radius: var(--radius-squircle, 24px);
           overflow: hidden;
           background: #fff;
           transition: var(--transition-smooth);
           box-shadow: 0 10px 40px rgba(0,0,0,0.04);
           border: 1px solid #f0f0f0;
        }

        .plan-image-container {
          position: relative;
          height: 350px;
          cursor: pointer;
          background: #fcfcfc;
          overflow: hidden;
        }

        .plan-image-container :global(.blur-image) {
          filter: blur(10px); /* Visible like 20% as requested */
          transition: var(--transition-smooth);
        }

        .plan-image-container:hover :global(.blur-image) {
          transform: scale(1.05);
        }

        .view-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .btn-view {
          padding: 14px 28px !important;
          animation: breathe 3s infinite;
          background: var(--cta-accent) !important;
          border-radius: var(--radius-button) !important;
          font-size: 0.75rem !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
        }

        h4 {
          padding: 25px 20px;
          font-size: 1.1rem;
          color: var(--secondary);
          margin: 0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .plan-image-container {
            height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default FloorPlans;
