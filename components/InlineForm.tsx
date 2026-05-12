'use client';

import React, { useState, useRef } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { getTrackingData } from '@/lib/tracking';

const InlineForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!captchaToken) {
      alert("Please complete the security verification.");
      return;
    }

    setIsSubmitting(true);
    
    const trackingData = getTrackingData();

    const payload = {
      name: formData.name,
      mobile: formData.phone,
      city: formData.city,
      source: "Website InlineForm",
      project: "Keshavaa La Arena",
      token: captchaToken,
      honeypot: formData.honeypot,
      ...trackingData
    };

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();

      if (result.success) {
        if (!result.isBot) {
          setSubmitted(true);
          setTimeout(() => {
            window.location.href = '/thankyou';
          }, 1000);
        } else {
          setIsSubmitting(false);
        }
      } else {
        alert(result.message || "Submission failed. Please try again.");
        setIsSubmitting(false);
        setCaptchaToken(null);
      }
    } catch (error) {
      console.error('Lead submission failed:', error);
      setSubmitted(true);
      setIsSubmitting(false);
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
            
            <form onSubmit={handleSubmit} className="actual-form" autoComplete="off">
              {/* Honeypot Field */}
              <div style={{ display: 'none' }}>
                <input 
                  type="text" 
                  name="website" 
                  value={formData.honeypot}
                  onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <input 
                type="text" 
                placeholder="Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                autoComplete="off"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                autoComplete="off"
              />
              <input 
                type="text" 
                placeholder="City" 
                required 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                autoComplete="off"
              />
              <div className="captcha-wrapper">
                <Turnstile
                  siteKey="0x4AAAAAADN02Tetw-4IdAeb"
                  onSuccess={(token) => setCaptchaToken(token)}
                  ref={captchaRef}
                  options={{
                    appearance: "always",
                    theme: "dark",
                    size: "normal"
                  }}
                />
              </div>
              <button type="submit" className="inline-submit" disabled={isSubmitting}>{isSubmitting ? 'SUBMITTING...' : 'RECEIVE BROCHURE'}</button>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .captcha-wrapper {
          grid-column: span 1;
          display: flex;
          align-items: center;
          min-height: 65px;
        }
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
          grid-column: span 1;
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
        .inline-submit:disabled { opacity: 0.6; cursor: not-allowed; }
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
          .captcha-wrapper {
            grid-column: span 1;
            justify-content: center;
          }
          h2 { font-size: 32px; }
        }
      `}</style>
    </section>
  );
};

export default InlineForm;
