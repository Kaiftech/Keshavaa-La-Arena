'use client';

import React from 'react';

const BrandStatement = () => {
  return (
    <section id="brand" className="brand-section">
      <div className="container brand-container">
        <div className="brand-center">
          <div className="eyebrow-badge">A KESHAVAA SIGNATURE</div>
          <h2 className="brand-title">
             The Soul of <br/><span>Goan Modernism.</span>
          </h2>
          <p className="brand-manifesto">
             We built La Arena as a tribute to modern Goan living. It’s a simple, honest space in the heart of Nerul—where local heritage meets contemporary comfort, and the design feels as steady and serene as the heritage village it honors.
          </p>
          
          {/* Heritage seal removed as requested */}
        </div>
      </div>

      <style jsx>{`
        .brand-section {
           background: var(--bg-creme);
           padding: 120px 0;
           position: relative;
           overflow: hidden;
           border-bottom: 1px solid var(--border-subtle);
           text-align: center;
        }

        .brand-container { position: relative; z-index: 10; }
        .brand-center { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }

        .eyebrow-badge {
           display: inline-block; padding: 12px 25px; border-radius: 4px; border: 1px solid var(--border-subtle);
           font-family: var(--font-inter); font-size: 11px; font-weight: 900; letter-spacing: 0.4em;
           color: var(--accent-primary); margin-bottom: 40px; text-transform: uppercase;
           background: #ffffff;
        }

        .brand-title {
           font-family: var(--font-inter); font-size: 82px; font-weight: 300; line-height: 0.95;
           color: var(--text-primary); letter-spacing: -4px; margin-bottom: 40px;
        }
        .brand-title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }
        
        .brand-manifesto {
           font-family: var(--font-inter); font-size: 18px; line-height: 1.8; color: var(--text-secondary);
           max-width: 650px; margin: 0 auto 50px; opacity: 0.8;
        }

        .heritage-seal {
           display: flex; align-items: center; gap: 20px;
           font-family: var(--font-inter); font-size: 11px; font-weight: 800;
           letter-spacing: 3px; color: var(--accent-primary); text-transform: uppercase;
           opacity: 0.7;
        }
        
        .seal-circle {
           width: 50px; height: 50px; border: 1px solid var(--accent-primary); border-radius: 50%;
           display: flex; align-items: center; justify-content: center; font-size: 10px; flex-shrink: 0;
        }

        @media (max-width: 1024px) {
           .brand-title { font-size: 60px; }
        }

        @media (max-width: 768px) {
           .brand-title { font-size: 44px; letter-spacing: -2px; }
           .brand-manifesto { font-size: 15px; padding: 0 20px; }
           .eyebrow-badge { font-size: 9px; letter-spacing: 0.2em; }
        }
      `}</style>
    </section>
  );
};

export default BrandStatement;
