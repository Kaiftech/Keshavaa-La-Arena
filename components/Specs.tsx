'use client';

import React from 'react';

const Specs = () => {
  const specs = [
    { label: 'STRUCTURE', val: 'RCC Framed (IS-456)' },
    { label: 'FLOORING', val: 'Vitrified Tiles (800x1600mm)' },
    { label: 'WINDOWS', val: 'UPVC Sliding (Sound-Dampening)' },
    { label: 'DOORS', val: 'Bespoke Teak Wood Entrance' },
    { label: 'ELECTRICAL', val: 'Concealed Copper (Fire-Retardant)' },
    { label: 'PLUMBING', val: 'Designer CP Fittings (Jaquar Art)' },
  ];

  return (
    <section id="specs" className="specs-section">
      <div className="container">
        <div className="specs-header">
           <div className="title-area">
             <span className="eyebrow">REFINED ARCHIVAL FINISHES</span>
             <h2 className="title">Bespoke <span>Specs.</span></h2>
           </div>
           <div className="header-badge">TECHNICAL-04 / <span>CERTIFIED REFINEMENT</span></div>
        </div>

        <div className="specs-grid">
          {specs.map((spec, i) => (
            <div key={i} className="spec-item">
              <div className="spec-label-wrap">
                 <span className="label">{spec.label}</span>
                 <div className="label-dot" />
              </div>
              <span className="val">{spec.val}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .specs-section {
           background: #ffffff;
           padding: 100px 0;
           border-bottom: 1px solid var(--border-subtle);
           position: relative;
        }

        .specs-header {
           display: flex; justify-content: space-between; align-items: flex-end;
           margin-bottom: 60px;
        }

        .eyebrow {
           display: block; font-family: var(--font-inter); font-size: 11px;
           font-weight: 800; letter-spacing: 0.8em; color: var(--accent-primary);
           margin-bottom: 25px;
        }

        .title {
           font-family: var(--font-inter); font-size: 58px; font-weight: 300;
           line-height: 1.1; color: var(--text-primary); letter-spacing: -3px;
        }
        .title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }

        .header-badge {
           font-family: var(--font-inter); font-size: 9px; font-weight: 900;
           letter-spacing: 0.3em; color: var(--text-primary); opacity: 0.3;
        }
        .header-badge span { font-weight: 500; font-size: 8px; }

        .specs-grid {
           display: grid; grid-template-columns: 1fr 1fr;
           column-gap: 80px; row-gap: 40px;
        }

        .spec-item {
           display: flex; justify-content: space-between; align-items: center;
           border-bottom: 1px solid #f8f8f8; padding-bottom: 15px;
           transition: border-color 0.4s ease;
        }
        .spec-item:hover { border-color: var(--accent-primary); }

        .spec-label-wrap { display: flex; align-items: center; gap: 15px; }
        .label {
           font-family: var(--font-inter); font-size: 9px; font-weight: 900;
           letter-spacing: 0.25em; color: var(--accent-primary); opacity: 0.5;
           text-transform: uppercase;
        }
        .label-dot { width: 3px; height: 3px; border-radius: 50%; border: 1px solid var(--accent-primary); }

        .val {
           font-family: var(--font-inter); font-size: 17px; font-weight: 700;
           color: var(--text-primary); opacity: 0.9; text-transform: none;
           letter-spacing: -0.5px;
        }

        @media (max-width: 1024px) {
           .title { font-size: 45px; }
           .specs-grid { grid-template-columns: 1fr; gap: 40px; }
           .specs-header { flex-direction: column; align-items: flex-start; gap: 30px; }
           .header-badge { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default Specs;
