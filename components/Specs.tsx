'use client';

'use client';

import React from 'react';

const Specs = () => {
  const specsList = [
    { label: 'Configuration', value: '1, 2, 3 & 4 BHK' },
    { label: 'Jodi Options', value: 'Available' },
    { label: 'Interiors', value: 'Modular Kitchen' },
    { label: 'Climate Control', value: 'A/C in All Bedrooms' },
    { label: 'Saleable Area', value: '83 to 350 Sqmt' },
    { label: 'ROI Potential', value: 'Maximized' },
  ];

  return (
    <section id="specs" className="specs-section">
      <div className="container">
        <h2 className="title-underline">Project Specifications</h2>
        <div className="specs-grid">
          {specsList.map((spec, i) => (
            <div key={i} className="spec-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="spec-label">{spec.label}</div>
              <div className="spec-value">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .specs-section {
          background: var(--bg-alt);
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .spec-card {
          padding: 40px;
          background: white;
          border-radius: var(--radius-squircle, 32px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
          transition: var(--transition-smooth);
        }

        .spec-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(197, 160, 89, 0.1);
        }

        .spec-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 15px;
        }

        .spec-value {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--secondary);
          font-family: var(--font-playfair);
        }

        @media (max-width: 1024px) {
          .specs-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .specs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Specs;
