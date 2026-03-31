import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src="/ASSESTS/KESHAVAA LOGO.webp" alt="Keshavaa Logo" loading="lazy" style={{ height: '50px' }} />
        </div>
        <div className="official-label">Official Developer Branding</div>
        <div className="footer-cta">
          <a href="https://wa.me/916262962621" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-2.32 0-4.518.892-6.193 2.518-3.033 2.946-3.327 7.747-.697 11.042l-1.026 3.735 3.864-.999c1.233.633 2.617.965 4.045.965a9.23 9.23 0 0 0 9.233-9.227c0-5.088-4.14-9.23-9.226-9.234zm5.187 11.733c-.223.633-1.29 1.163-1.782 1.233-.483.07-1.116.124-3.15-.658-2.612-1.003-4.26-3.66-4.39-3.83-.13-.17-1.046-1.39-1.046-2.653s.658-1.847.882-2.112c.224-.265.484-.33.645-.33s.33.01.474.01c.15 0 .34-.056.54.414.22.527.76 1.847.82 1.97.07.13.11.28.02.46-.09.18-.13.3-.264.45-.13.15-.28.34-.4.48-.13.15-.27.31-.11.583.15.27.696 1.15 1.5 1.864.13.114.28.2.45.26.17.06.33.05.51.01s.41-.33.53-.48c.12-.15.15-.22.25-.37s.2-.18.35-.07l1.78.88c.15.07.25.12.33.24.08.13.08.77-.14 1.407z" />
            </svg>
            Connect on WhatsApp
          </a>
        </div>
        <div className="rera-note">
           RERA No: PRGO05232049 | Disclaimer: Imagery is indicative of the proposed development. Actual views may vary.
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--white);
          padding: 100px 0 60px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 35px;
          text-align: center;
        }
        .official-label {
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .rera-note {
          font-size: 0.8rem;
          color: var(--slate-light);
          max-width: 600px;
          line-height: 1.6;
          opacity: 0.8;
          margin-top: 20px;
        }
        @media (max-width: 768px) {
          .footer { padding: 80px 0 40px; }
        }
      `}</style>
    </footer>
  );
}
