'use client';

import React from 'react';

const BrandStatement = () => {
  return (
    <section id="brand" className="brand-section">
      {/* Background Architectural Watermark */}
      <div className="watermark">
        <span>ARCHIVE-2026</span>
      </div>

      {/* Blueprint Grid Lines */}
      <div className="blueprint-overlay">
         <div className="grid-line v-1" />
         <div className="grid-line v-2" />
         <div className="grid-line h-1" />
      </div>

      <div className="container brand-container">
        <div className="brand-layout">
          
          <div className="brand-content">
            <div className="eyebrow-badge">A KESHAVAA SIGNATURE</div>
            <h2 className="brand-title">
               The Soul of <br/><span>Goan Modernism.</span>
            </h2>
            <p className="brand-manifesto">
               La Arena isn't just a structure; it's a curated lens into the Nerul riverfront — a structural poem where raw coastal heritage meets precise technical luxury.
            </p>
            
            <div className="heritage-seal">
               <svg width="40" height="40" viewBox="0 0 100 100">
                  <path d="M50 5 L95 25 V75 L50 95 L5 75 V25 Z" fill="none" stroke="var(--accent-primary)" strokeWidth="1" />
                  <text x="50" y="55" fontSize="10" textAnchor="middle" fill="var(--accent-primary)" letterSpacing="2">GOA</text>
               </svg>
               <span>EST'D 1984 - NERUL VILLAGE heritage core</span>
            </div>
          </div>

          <div className="brand-ledger-wrap">
             <div className="ledger-box">
                <div className="ledger-header">PROJECT LEDGER</div>
                
                <div className="ledger-item">
                   <div className="ledger-num">01</div>
                   <div className="ledger-data">
                      <span className="ledger-label">PRECISION</span>
                      <p className="ledger-val">3,200 SQ. FT. ESTATE</p>
                      <p className="ledger-details">Fluid spatial geometry for riverfront flow.</p>
                   </div>
                </div>

                <div className="ledger-item">
                   <div className="ledger-num">02</div>
                   <div className="ledger-data">
                      <span className="ledger-label">HERITAGE</span>
                      <p className="ledger-val">NERUL RIVIERA</p>
                      <p className="ledger-details">Located in Goa's most silent coastal quarter.</p>
                   </div>
                </div>

                <div className="ledger-item">
                   <div className="ledger-num">03</div>
                   <div className="ledger-data">
                      <span className="ledger-label">ACCESS</span>
                      <p className="ledger-val">PRIVATE BOAT DOCK</p>
                      <p className="ledger-details">A direct nautical gateway to the Arabian Sea.</p>
                   </div>
                </div>

                <div className="ledger-footer">
                   <span>AUTHENTIC KESHAVAA ASSET</span>
                   <div className="qr-box" />
                </div>
             </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .brand-section {
           background: var(--bg-creme);
           padding: 100px 0;
           position: relative;
           overflow: hidden;
           border-bottom: 1px solid var(--border-subtle);
        }

        .watermark {
           position: absolute; left: 0; right: 0; bottom: -5%;
           text-align: center; pointer-events: none; opacity: 0.03;
           font-family: var(--font-inter); font-weight: 900; font-size: 15vw;
           letter-spacing: 0.2em; color: var(--text-primary);
        }

        .blueprint-overlay {
           position: absolute; inset: 0; pointer-events: none;
        }
        .grid-line { 
           position: absolute; background: var(--accent-primary); opacity: 0.08;
        }
        .v-1 { left: 10%; width: 1px; height: 100%; }
        .v-2 { right: 10%; width: 1px; height: 100%; }
        .h-1 { top: 50%; width: 100%; height: 1px; }

        .brand-container { position: relative; z-index: 10; }
        .brand-layout { display: flex; align-items: center; justify-content: space-between; gap: 80px; }

        .brand-content { flex: 1.2; }
        .eyebrow-badge {
           display: inline-block; padding: 10px 20px; border-radius: 4px; border: 1px solid var(--border-subtle);
           font-family: var(--font-inter); font-size: 10px; font-weight: 900; letter-spacing: 0.3em;
           color: var(--accent-primary); margin-bottom: 40px; text-transform: uppercase;
           background: #ffffff;
        }

        .brand-title {
           font-family: var(--font-inter); font-size: 64px; font-weight: 300; line-height: 1.0;
           color: var(--text-primary); letter-spacing: -3px; margin-bottom: 35px;
        }
        .brand-title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }
        
        .brand-manifesto {
           font-family: var(--font-inter); font-size: 16px; line-height: 1.7; color: var(--text-secondary);
           max-width: 500px; margin-bottom: 45px; opacity: 0.8;
        }

        .heritage-seal {
           display: flex; align-items: center; gap: 20px;
           font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 2px; color: var(--accent-primary); text-transform: uppercase;
           opacity: 0.6;
        }

        .brand-ledger-wrap { flex: 0.8; min-width: 400px; }
        .ledger-box {
           background: #ffffff; border: 1px solid var(--border-subtle); padding: 50px;
           border-radius: 20px; box-shadow: 0 40px 100px rgba(8, 22, 23, 0.05);
           position: relative;
        }
        .ledger-header {
           font-family: var(--font-inter); font-size: 9px; font-weight: 900; letter-spacing: 0.5em;
           color: var(--accent-primary); margin-bottom: 40px; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px;
        }

        .ledger-item { display: flex; gap: 25px; margin-bottom: 35px; }
        .ledger-num {
           font-family: var(--font-playfair); font-size: 16px; font-style: italic; color: var(--accent-primary);
           opacity: 0.4; margin-top: 5px;
        }
        
        .ledger-label { 
           display: block; font-family: var(--font-inter); font-size: 9px; font-weight: 900;
           letter-spacing: 0.3em; color: var(--accent-primary); margin-bottom: 5px;
        }
        .ledger-val {
           font-family: var(--font-inter); font-size: 20px; font-weight: 800; color: var(--text-primary);
           letter-spacing: -0.5px; margin-bottom: 5px;
        }
        .ledger-details { font-size: 13px; color: var(--text-secondary); opacity: 0.7; }

        .ledger-footer {
           border-top: 1px dotted #e0e0e0; padding-top: 25px; display: flex; justify-content: space-between; align-items: center;
           font-family: var(--font-inter); font-size: 8px; font-weight: 900; letter-spacing: 2px;
           color: rgba(0,0,0,0.2);
        }
        .qr-box { width: 30px; height: 30px; border: 1px solid #f0f0f0; background: #fafafa; border-radius: 4px; }

        @media (max-width: 1024px) {
           .brand-layout { flex-direction: column; align-items: flex-start; gap: 60px; }
           .brand-title { font-size: 50px; }
           .brand-ledger-wrap { width: 100%; min-width: 0; }
        }

        @media (max-width: 768px) {
           .brand-title { font-size: 40px; }
           .ledger-box { padding: 35px; }
        }
      `}</style>
    </section>
  );
};

export default BrandStatement;
