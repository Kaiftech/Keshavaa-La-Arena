'use client';

import React, { useState } from 'react';

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lead-form-container">
      {/* Corner Brackets */}
      <div className="corner-bracket" />

      {submitted ? (
        <div className="form-success">
           <div className="success-icon">
              <span>✓</span>
           </div>
           <h3>Registry Confirmed</h3>
           <p>A consultant will contact you shortly.</p>
        </div>
      ) : (
        <div className="form-inner">
          <div className="form-header">
             <span className="eyebrow">THE REGISTRATION</span>
             <h3>Private <span>Enquiry.</span></h3>
             <p className="desc">Request exclusive access to pre-launch pricing and floor plans.</p>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>FULL NAME</label>
              <input 
                type="text" 
                placeholder="Marcus Aurelius" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="form-row">
               <div className="form-group">
                 <label>OFFICIAL EMAIL</label>
                 <input 
                   type="email" 
                   placeholder="principle@estate.com" 
                   required
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                 />
               </div>
               
               <div className="form-group">
                 <label>DIRECT TELEPHONE</label>
                 <input 
                   type="tel" 
                   placeholder="+91 . . . . . . . . . ." 
                   required
                   value={formData.phone}
                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
                 />
               </div>
            </div>

            <button type="submit" className="submit-btn">
               REGISTER INTEREST <span className="arrow">→</span>
            </button>
          </form>

          <div className="form-footer">
             <p>GDPR Compliant & Discreet</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .lead-form-container {
           position: relative;
           background: white;
           padding: 64px;
           border: 1px solid rgba(154, 128, 94, 0.15);
           box-shadow: 0 5px 15px rgba(0,0,0,0.03);
           max-width: 700px;
           margin: 0 auto;
           text-align: left;
        }

        .corner-bracket {
           position: absolute;
           top: -1px; left: -1px;
           width: 40px; height: 40px;
           border-top: 2px solid rgba(154, 128, 94, 0.8);
           border-left: 2px solid rgba(154, 128, 94, 0.8);
        }

        .form-success {
           padding: 80px 0;
           display: flex; flex-direction: column; align-items: center; text-align: center;
           animation: reveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        .success-icon {
           width: 64px; height: 64px; margin-bottom: 40px;
           border: 1px solid rgba(154, 128, 94, 0.4);
           display: flex; align-items: center; justify-content: center;
           animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .success-icon span { color: var(--gold-muted); font-size: 24px; }

        .form-success h3 {
           font-family: var(--font-playfair);
           font-style: italic;
           font-size: 40px;
           color: var(--gold-muted);
           margin-bottom: 24px;
           line-height: 1.1;
        }

        .form-success p {
           font-family: var(--font-inter);
           font-size: 11px;
           font-weight: 800;
           letter-spacing: 0.4em;
           text-transform: uppercase;
           color: rgba(74, 74, 74, 0.6);
        }

        .form-inner {
           animation: reveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        .form-header { text-align: center; margin-bottom: 56px; }

        .eyebrow {
           display: block;
           font-family: var(--font-inter);
           font-size: 10px;
           letter-spacing: 0.5em;
           font-weight: 800;
           color: var(--gold-muted);
           text-transform: uppercase;
           margin-bottom: 16px;
        }

        .form-header h3 {
           font-family: var(--font-inter);
           font-size: 50px;
           font-weight: 300;
           line-height: 1;
           color: #030303;
           margin-bottom: 16px;
        }

        .form-header h3 span {
           font-family: var(--font-playfair);
           font-style: italic;
           color: var(--gold-muted);
        }

        .desc {
           font-family: var(--font-inter);
           font-size: 14px;
           color: rgba(74, 74, 74, 0.7);
           max-width: 350px;
           margin: 0 auto;
           line-height: 1.6;
        }

        .lead-form { display: flex; flex-direction: column; gap: 40px; }

        .form-row {
           display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
        }

        .form-group label {
           font-family: var(--font-inter);
           font-size: 10px;
           text-transform: uppercase;
           letter-spacing: 0.3em;
           font-weight: 800;
           color: var(--gold-muted);
           margin-bottom: 12px;
           display: block;
        }

        .form-group input {
           width: 100%;
           background: transparent;
           border: none;
           border-bottom: 1px solid rgba(3, 3, 3, 0.1);
           padding-bottom: 12px;
           font-family: var(--font-playfair);
           font-size: 20px;
           font-style: italic;
           color: #030303;
           transition: border-color 0.3s ease;
        }

        .form-group input:focus { outline: none; border-bottom-color: var(--gold-muted); }

        .form-group input::placeholder {
           color: rgba(3, 3, 3, 0.2);
           font-style: normal;
           font-family: var(--font-inter);
           font-size: 14px;
        }

        .submit-btn {
           margin-top: 24px;
           padding: 24px;
           background: #030303;
           color: white;
           font-family: var(--font-inter);
           font-size: 11px;
           font-weight: 900;
           text-transform: uppercase;
           letter-spacing: 0.4em;
           border: none;
           cursor: pointer;
           transition: background 0.5s ease;
           display: flex; align-items: center; justify-content: center;
           width: 100%;
        }

        .submit-btn:hover { background: var(--gold-muted); }
        .submit-btn .arrow { margin-left: 16px; transition: transform 0.3s; }
        .submit-btn:hover .arrow { transform: translateX(5px); }

        .form-footer {
           margin-top: 56px;
           padding-top: 24px;
           border-top: 1px solid rgba(3, 3, 3, 0.05);
           text-align: center;
        }

        .form-footer p {
           font-size: 10px;
           letter-spacing: 0.2em;
           font-weight: 500;
           color: rgba(3, 3, 3, 0.3);
           text-transform: uppercase;
           font-style: italic;
        }

        @keyframes reveal {
           from { opacity: 0; transform: translateY(10px); }
           to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
           .lead-form-container { padding: 40px 24px; }
           .form-row { grid-template-columns: 1fr; gap: 40px; }
           .form-header h3 { font-size: 42px; }
        }
      `}</style>
    </div>
  );
};

export default LeadForm;
