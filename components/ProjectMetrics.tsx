'use client';

import React from 'react';

const ProjectMetrics = () => {
  return (
    <div className="metrics-belt">
      <div className="container">
        <div className="metrics-grid">
          <div className="metric-item">
            <span className="label">ESTATE</span>
            <span className="value">3,200 SQ. FT.</span>
          </div>
          <div className="v-divider" />
          <div className="metric-item">
            <span className="label">LOCATION</span>
            <span className="value">NERUL, GOA</span>
          </div>
          <div className="v-divider" />
          <div className="metric-item">
            <span className="label">TYPE</span>
            <span className="value">RIVERFRONT</span>
          </div>
          <div className="v-divider" />
          <div className="metric-item">
            <span className="label">STATUS</span>
            <span className="value">EXCLUSIVE</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .metrics-belt {
          background: #ffffff;
          padding: 30px 0;
          border-bottom: 1px solid var(--border-subtle);
          position: relative;
          z-index: 50;
        }
        .metrics-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
        }
        .metric-item {
          display: flex;
          align-items: baseline;
          gap: 15px;
        }
        .label {
          font-family: var(--font-inter);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--accent-primary);
          text-transform: uppercase;
        }
        .value {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 0.5px;
        }
        .v-divider {
          width: 1px;
          height: 20px;
          background: var(--border-subtle);
        }

        @media (max-width: 1024px) {
          .metrics-grid { gap: 30px; }
        }
        @media (max-width: 768px) {
          .metrics-belt { padding: 40px 0; }
          .metrics-grid {
            flex-direction: column;
            gap: 25px;
            align-items: center;
          }
          .v-divider { display: none; }
          .metric-item {
            flex-direction: column;
            align-items: center;
            gap: 5px;
            text-align: center;
          }
          .value { font-size: 14px; }
        }
      `}</style>
    </div>
  );
};

export default ProjectMetrics;
