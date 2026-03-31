'use client';

import React from 'react';

interface FloorPlansProps {
  onOpenModal: () => void;
}

export default function FloorPlans({ onOpenModal }: FloorPlansProps) {
  const plans = [
    { title: '1 Bedroom Residence', src: '/ASSESTS/floor plan.jpg', tag: 'River Facing' },
    { title: '2 BHK + Attic residence', src: '/ASSESTS/floor plan attic.jpg', tag: 'Limited Edition' },
    { title: 'Signature Penthouse', src: '/ASSESTS/floor plan penthouse.jpg', tag: 'Exclusive' }
  ];

  return (
    <section className="floor-plans">
      <div className="container">
        <div className="section-header">
           <span className="subtitle">Signature Spaces</span>
           <h2>Elite Floor Plans</h2>
        </div>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div className="plan-card" key={index} onClick={onOpenModal}>
              <div className="plan-header">
                <h3>{plan.title}</h3>
                <span className="plan-tag">{plan.tag}</span>
              </div>
              <div className="plan-visual gated">
                <img src={plan.src} alt={plan.title} className="plan-img blurred" loading="lazy" />
                <div className="plan-overlay">
                   <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                     <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                   </svg>
                   <button className="btn btn-gold-filled">Enquire Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .floor-plans {
          background: var(--base-beige);
          padding: 120px 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .subtitle {
          display: block;
          color: var(--bright-aqua);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.8rem;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .floor-plans h2 {
          color: var(--dark-slate);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-family: var(--serif-font);
        }
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 40px;
        }
        .plan-card {
          background: var(--white);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          border: 1px solid rgba(0, 209, 193, 0.05);
          transition: var(--transition);
          cursor: pointer;
          position: relative;
        }
        .plan-header {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }
        .plan-header h3 {
          font-size: 1.2rem;
          color: var(--dark-slate);
        }
        .plan-tag {
          font-size: 0.65rem;
          text-transform: uppercase;
          background: var(--aqua-glass);
          color: var(--bright-aqua);
          padding: 5px 12px;
          border-radius: 50px;
          font-weight: 700;
        }
        .plan-visual {
          position: relative;
          height: 280px;
        }
        .plan-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(2px); /* 8% conceptual blur */
          opacity: 0.9;
          transition: var(--transition);
        }
        .plan-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(30, 41, 59, 0.65);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: var(--transition);
        }
        .plan-card:hover .plan-overlay {
          opacity: 1;
        }
        .lock-icon {
          width: 44px;
          height: 44px;
          margin-bottom: 24px;
          color: var(--gold);
        }
        @media (max-width: 768px) {
          .plans-grid { grid-template-columns: 1fr; }
          .plan-visual { height: 300px; }
        }
      `}</style>
    </section>
  );
}
