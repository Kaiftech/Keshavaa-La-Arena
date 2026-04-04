'use client';

import React, { useState } from 'react';

const InlineForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      name: formData.name,
      mobile: formData.phone,
      city: formData.city,
      source: "Website InlineForm",
      project: "Keshavaa La Arena"
    };

    try {
      await fetch('https://connector.b2bbricks.com/api/Integration/hook/53b3d0b4-ffd1-4ba6-b633-f736c36d924f', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = '/thankyou';
      }, 1000);
    } catch (error) {
      console.error('Lead submission failed:', error);
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = '/thankyou';
      }, 1000);
    }
  };

  return (
    <section className="inline-form-section">
      <div className="container">
        {submitted ? (
          <div className="success-message">
            <h3>Thank You for your interest.</h3>
            <p>Our brochure and price list are being sent to your phone.</p>
          </div>
        ) : (
          <div className="form-wrapper">
            <div className="form-content">
              <span className="eyebrow">FINAL OPPORTUNITY</span>
              <h2>Get the <span>Brochure + Price List.</span></h2>
              <p>Experience the pinnacle of Goa luxury. Register below to receive our comprehensive project portfolio.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="actual-form">
              <input 
                type="text" 
                placeholder="Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="City" 
                required 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
              />
              <button type="submit" className="inline-submit">RECEIVE BROCHURE</button>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .inline-form-section {
          background: #081617;
          padding: 80px 20px;
          color: #fff;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .form-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .form-content {
          flex: 1;
        }
        .eyebrow {
          display: block;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.4em;
          color: var(--accent-primary);
          margin-bottom: 20px;
        }
        h2 {
          font-family: var(--font-inter);
          font-size: 42px;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 20px;
        }
        h2 span {
          font-family: var(--font-playfair);
          font-style: italic;
          color: var(--accent-primary);
        }
        p {
          font-family: var(--font-inter);
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          max-width: 450px;
          line-height: 1.6;
        }
        .actual-form {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 16px;
          font-family: var(--font-inter);
          font-size: 13px;
          color: #fff;
          border-radius: 4px;
          transition: all 0.3s;
        }
        input:focus {
          outline: none;
          background: rgba(255,255,255,0.1);
          border-color: var(--accent-primary);
        }
        .inline-submit {
          grid-column: span 2;
          background: var(--accent-primary);
          color: #fff;
          border: none;
          padding: 20px;
          font-family: var(--font-inter);
          font-weight: 900;
          font-size: 11px;
          letter-spacing: 3px;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 4px;
        }
        .inline-submit:hover {
          background: #fff;
          color: #081617;
          transform: translateY(-2px);
        }
        .success-message {
          text-align: center;
          padding: 40px 0;
        }
        .success-message h3 {
          font-family: var(--font-playfair);
          font-style: italic;
          font-size: 32px;
          margin-bottom: 15px;
          color: var(--accent-primary);
        }
        
        @media (max-width: 991px) {
          .form-wrapper {
            flex-direction: column;
            text-align: center;
          }
          p { margin: 0 auto 30px; }
          .actual-form {
            width: 100%;
            max-width: 600px;
          }
        }
        @media (max-width: 580px) {
          .actual-form {
            grid-template-columns: 1fr;
          }
          .inline-submit {
            grid-column: span 1;
          }
          h2 { font-size: 32px; }
        }
      `}</style>
    </section>
  );
};

export default InlineForm;
