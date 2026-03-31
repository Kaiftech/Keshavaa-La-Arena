import React from 'react';

export default function ProjectDetails() {
  return (
    <section className="details-strip">
      <div className="container">
        <div className="stat-row">
          <div className="stat-item">
            <div className="stat-label">Configuration</div>
            <div className="stat-value">1 & 2 BHK</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Area</div>
            <div className="stat-value">850 - 1450 Sq.Ft.</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Location</div>
            <div className="stat-value">Nerul, Goa</div>
          </div>
        </div>
        <div className="brand-copy">
          <p>
            La Arena is a calm, well-considered address — forest on one side, river on the other. 
            Semi-furnished homes with private jacuzzis and generous open layouts, designed for those 
            who seek tranquility without compromising on elegance.
          </p>
        </div>
      </div>

      <style jsx>{`
        .details-strip {
          background: var(--white);
          color: var(--dark-slate);
          padding: 100px 0;
          position: relative;
          z-index: 5;
          box-shadow: 0 -20px 40px rgba(0,0,0,0.02);
        }
        .stat-row {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin-bottom: 70px;
          flex-wrap: wrap;
        }
        .stat-item {
          text-align: center;
          flex: 1;
          min-width: 200px;
        }
        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          margin-bottom: 12px;
          color: var(--bright-aqua);
          font-weight: 700;
        }
        .stat-value {
          font-family: var(--serif-font);
          font-size: 2.2rem;
          font-weight: 600;
          color: var(--dark-slate);
          letter-spacing: -0.02em;
        }
        .brand-copy {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          font-size: 1.2rem;
          line-height: 1.9;
          color: var(--slate-light);
          font-weight: 400;
        }
        @media (max-width: 768px) {
          .stat-row { gap: 40px; }
          .stat-item { min-width: 150px; }
          .stat-label { letter-spacing: 0.25em; }
          .stat-value { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
}
