'use client';

import React, { useState, useEffect } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [viewers, setViewers] = useState(14);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    // Generate random number between 12 and 22
    setViewers(Math.floor(Math.random() * 11) + 12);

    const handleScroll = () => {
      // Show WhatsApp button only after scrolling past the Hero banner (>500px)
      setShowWhatsApp(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    window.location.href = '/thank-you';
  };

  return (
    <>
      <div id="lead-form" className="lead-card">
        <div className="form-inner">
          <div className="form-header">
            <h3 className="font-luxury">LA ARENA</h3>
            <p className="premium-tag">BY KESHAVAA DEVELOPERS • GOA</p>
          </div>
          
          <div className="form-body">
            <div className="live-counter">
              <span className="pulsing-dot"></span>
              {viewers} People viewing this right now
            </div>

            <div className="exclusive-badges">
              <span className="badge-item gold">New Launch</span>
              <span className="badge-item active">Best ROI</span>
            </div>
            
            <h4>Unlock Private Pricing</h4>
            <div className="marketing-highlights">
               <ul className="highlight-list">
                 <li><span>✓</span> Luxury Spacious Apartments</li>
                 <li><span>✓</span> High Fixed Rental Potential</li>
                 <li><span>✓</span> Premium Modular Kitchen & A/C</li>
                 <li><span>✓</span> Multiple BHK & Jodi Options</li>
                 <li><span>✓</span> Attractive EOI Plans Available</li>
               </ul>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="input-group">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <button type="submit" className="btn-premium aggressive-btn animate-breathe contrast-cta">
                GET INSTANT CALLBACK
                <span className="btn-glow"></span>
              </button>
            </form>
            
            <p className="timer-notice">Exclusive Pre-Launch Benefits Ending Soon</p>
          </div>

          <div className="form-footer">
             <p>Register to Download Brochure</p>
          </div>
        </div>
      </div>

      <div className="mobile-bottom-bar">
        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          className="bottom-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-icon">💬</span>
          WHATSAPP
        </a>
        <a href="#lead-form" className="bottom-btn enquiry-btn">
          <span className="btn-icon">📩</span>
          ENQUIRE NOW
        </a>
      </div>

      {showWhatsApp && (
        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          className="whatsapp-float desktop-only animate-fade-up"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
        >
          <span className="whatsapp-icon">💬</span>
          <span>WhatsApp</span>
        </a>
      )}

      <style jsx>{`
        .lead-card {
           background: #ffffff;
           height: 100vh;
           width: 100%;
           display: flex;
           flex-direction: column;
           overflow: hidden;
           position: relative;
        }

        .live-counter {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.75rem;
          color: #ff4444;
          font-weight: 700;
          background: rgba(255, 68, 68, 0.05);
          padding: 8px;
          border-radius: 8px;
          margin-bottom: 5px;
        }

        .pulsing-dot {
          width: 8px;
          height: 8px;
          background: #ff4444;
          border-radius: 50%;
          animation: dotPulse 1.5s infinite;
        }

        @keyframes dotPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .form-inner {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .form-header {
          padding: clamp(15px, 3vh, 35px) 30px;
          background: var(--secondary);
          color: white;
          text-align: center;
          border-bottom: 2px solid var(--primary);
        }

        .form-header h3 {
          font-size: clamp(1.2rem, 3vh, 1.8rem);
          margin-bottom: 2px;
          letter-spacing: 5px;
        }

        .premium-tag {
          font-size: 0.6rem;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
        }

        .form-body {
          padding: 25px 35px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 15px;
        }

        .exclusive-badges {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        .badge-item {
          font-size: 0.6rem;
          background: #f0f0f0;
          padding: 4px 10px;
          border-radius: 50px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .badge-item.gold {
          background: var(--primary);
          color: white;
        }

        .form-body h4 {
          font-size: 1rem;
          color: var(--secondary);
          text-align: center;
          margin: 0;
          font-weight: 800;
        }

        .highlight-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .highlight-list li {
          font-size: 0.75rem;
          margin-bottom: 6px;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .highlight-list span {
          color: var(--primary);
          font-weight: 900;
        }

        .input-group {
          margin-bottom: 12px;
        }

        input {
          width: 100%;
          padding: 12px 20px;
          border: 1px solid #eee;
          background: #fdfdfd;
          border-radius: 12px;
          font-family: inherit;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        input:focus {
          outline: none;
          border-color: var(--primary);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
        }

        .contrast-cta {
          background: var(--cta-accent) !important;
          color: white !important;
          border: none !important;
          box-shadow: 0 10px 40px rgba(255, 107, 53, 0.3) !important;
        }

        .contrast-cta:hover {
          background: var(--cta-hover) !important;
        }

        .aggressive-btn {
          width: 100%;
          padding: 18px !important;
          border-radius: var(--radius-button);
          font-size: 0.95rem !important;
          position: relative;
          overflow: hidden;
          font-weight: 900;
        }

        .timer-notice {
          font-size: 0.65rem;
          color: #ff4444;
          text-align: center;
          font-weight: 700;
          margin: 0;
        }

        .form-footer {
          padding: 15px 30px;
          text-align: center;
          background: #fcfcfc;
          border-top: 1px solid #eee;
          font-size: 0.65rem;
          color: #999;
        }

        .mobile-bottom-bar {
          display: none;
        }

        @media (max-width: 1024px) {
          .lead-card {
            height: auto;
            border-bottom: 1px solid var(--accent);
            overflow: visible;
          }
          
          .mobile-bottom-bar {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 5000;
            height: 60px;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
          }

          .bottom-btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 0.75rem;
            font-weight: 900;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .whatsapp-btn {
            background: #25d366;
          }

          .enquiry-btn {
            background: var(--cta-accent);
          }

          .btn-icon {
            font-size: 1.1rem;
          }
        }

        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          left: 30px;
          background: #25d366;
          color: white;
          padding: 8px 18px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          z-index: 9999;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
          animation: breathe 3s infinite;
          transition: var(--transition-smooth);
        }

        .whatsapp-float:hover {
          transform: scale(1.05);
          background: #128c7e;
        }

        .whatsapp-icon {
          font-size: 1.2rem;
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default LeadForm;
