'use client';

import React from 'react';
import Image from 'next/image';

const FloorPlans = () => {
   const plans = [
      {
         type: '1 BHK',
         area: '65 – 110 SQ.M.',
         img: '/assets/floor plan.jpg',
         desc: 'Smartly designed for effortless living, perfect as a holiday home or a high-yield investment in Goa.'
      },
      {
         type: '2 BHK',
         area: '100 – 140 SQ.M.',
         img: '/assets/floor plan penthouse.jpg',
         desc: 'Spacious layouts with thoughtfully defined living zones—ideal for families, longer stays, and elevated comfort.'
      },
      {
         type: '2 BHK Penthouse',
         area: '180 SQ.M.',
         img: '/assets/floor plan attic.jpg',
         desc: 'An elevated living experience with your own private rooftop—crafted for those who want space, privacy, and a statement lifestyle.'
      },
   ];

   return (
      <section id="floorplans" className="floorplans-section">
         <div className="container floorplans-container">
            <div className="floorplans-header">
               <div className="title-area">
                  <span className="eyebrow">TECHNICAL PRECISION</span>
                  <h2 className="title">
                     Architectural <span>Layouts.</span>
                  </h2>
               </div>
               <p className="desc">Bespoke spatial design optimized for the Nerul riverfront.</p>
            </div>

            <div className="floorplans-grid">
               {plans.map((plan, i) => (
                  <div key={i} className="floorplan-card">
                     <a href="#enquire" className="plan-visual">
                        <Image
                           src={plan.img}
                           alt={plan.type}
                           fill
                           style={{ objectFit: 'contain' }}
                           className="floor-img"
                           sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="enquiry-overlay">
                           <div className="enquiry-badge">
                              <span className="lock-icon">🔒</span>
                              ENQUIRE NOW
                           </div>
                           <p>Request Technical Blueprint</p>
                        </div>
                     </a>

                     <div className="floorplan-info">
                        <span className="area">{plan.area}</span>
                        <h3 className="type">{plan.type}</h3>
                        <p className="summary">{plan.desc}</p>
                        <div className="action">
                           <a href="#enquire" className="unlock-btn">ENQUIRE FOR FLOOR PLAN</a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         <style jsx>{`
        .floorplans-section {
           background: #ffffff;
           padding: 30px 0;
           border-top: 1px solid var(--border-subtle);
        }
        .floorplans-header {
           display: flex; justify-content: space-between; align-items: flex-end;
           margin-bottom: 40px;
        }
        .eyebrow {
           display: block; font-family: var(--font-inter); font-size: 11px; font-weight: 800;
           letter-spacing: 0.6em; color: var(--accent-primary); margin-bottom: 15px;
        }
        .title {
           font-family: var(--font-inter); font-size: 52px; font-weight: 300;
           line-height: 1.1; color: var(--text-primary); letter-spacing: -2px;
        }
        .title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }
        .desc { font-family: var(--font-inter); font-size: 14px; color: var(--text-secondary); max-width: 300px; text-align: right; }

        .floorplans-grid {
           display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;
        }

        .plan-visual {
           position: relative; width: 100%; height: 300px;
           background: #ffffff; border-radius: 8px; margin-bottom: 25px;
           border: 1px solid #f2f2f2; display: block; overflow: hidden;
           cursor: pointer; text-decoration: none;
           /* Hatched Pattern Over the image */
           background-image: repeating-linear-gradient(
             45deg,
             rgba(0, 0, 0, 0.01) 0px,
             rgba(0, 0, 0, 0.01) 1px,
             transparent 1px,
             transparent 3px
           );
        }
        .plan-visual :global(.floor-img) {
           filter: blur(8px) contrast(1.05) opacity(0.85);
           transition: all 0.6s ease;
           transform: scale(0.98);
        }
        .plan-visual:hover :global(.floor-img) {
           filter: blur(8px) contrast(1.1) opacity(0.95);
           transform: scale(1.02);
        }

        .enquiry-overlay {
           position: absolute; inset: 0;
           display: flex; flex-direction: column; align-items: center; justify-content: center;
           z-index: 20; color: #fff;
           background: rgba(8, 22, 23, 0.5);
           backdrop-filter: blur(4px);
           opacity: 0; transition: opacity 0.4s ease;
        }
        .plan-visual:hover .enquiry-overlay { opacity: 1; }

        .enquiry-badge {
           display: flex; flex-direction: column; align-items: center; gap: 10px;
           font-family: var(--font-inter); font-size: 11px; font-weight: 800;
           letter-spacing: 0.5em; border: 1px solid var(--accent-primary);
           padding: 15px 35px; border-radius: 4px; background: var(--accent-primary);
           color: #000; margin-bottom: 10px;
        }
        .lock-icon { font-size: 18px; margin-bottom: 5px; opacity: 0.8; }
        .enquiry-overlay p { font-family: var(--font-inter); font-size: 9px; font-weight: 800; letter-spacing: 2px; opacity: 0.8; text-transform: uppercase; }

        .floorplan-info { text-align: center; }
        .area {
           display: block; font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 4px; color: var(--accent-primary); margin-bottom: 10px;
           text-transform: uppercase;
        }
        .type {
           font-family: var(--font-playfair); font-size: 24px; line-height: 1.2;
           color: var(--text-primary); margin-bottom: 10px; font-style: italic;
        }
        .summary { font-size: 13px; color: var(--text-secondary); line-height: 1.6; padding: 0 10px; }
        .action { margin-top: 20px; }
        .unlock-btn {
           font-family: var(--font-inter); font-size: 10px; font-weight: 900;
           letter-spacing: 3px; text-transform: uppercase; color: var(--text-primary);
           text-decoration: none; border-bottom: 2px solid var(--accent-primary);
           padding-bottom: 4px; transition: all 0.3s;
        }
        .unlock-btn:hover { background: var(--accent-primary); color: #fff; padding: 4px 10px; border-radius: 4px; }

        @media (max-width: 1024px) {
           .title { font-size: 40px; }
           .floorplans-grid { grid-template-columns: 1fr; gap: 40px; }
           .floorplans-header { flex-direction: column; align-items: flex-start; gap: 15px; }
           .desc { text-align: left; }
        }
      `}</style>
      </section>
   );
};

export default FloorPlans;
