'use client';

import React, { useState, useRef } from 'react';

import { getTrackingData } from '@/lib/tracking';

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: '', city: '', phone: '', honeypot: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    


    setIsSubmitting(true);
    
    const trackingData = getTrackingData();
    
    // CRM Mapping: Name->name, Mobile->mobile, Remark->city, Source->source
    const payload = {
      name: formData.name,
      mobile: formData.phone,
      city: formData.city,
      source: "Website LeadForm",
      project: "Keshavaa La Arena",

      honeypot: formData.honeypot,
      ...trackingData
    };

    try {
      // Call CRM webhook directly
      const crmUrl = 'https://connector.b2bbricks.com/api/Integration/hook/53b3d0b4-ffd1-4ba6-b633-f736c36d924f';
      const crmResponse = await fetch(crmUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('CRM response:', crmResponse.status);

      // Call Google Sheets
      const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbzUChL241GLYuSeUxn6iUUnJR3a0SilBr3iOtiGthwQPy8LSg6us-HshuY7Lmfwtkqo/exec';
      const sheetData = {
        name: payload.name,
        mobile: payload.mobile,
        configuration: (payload as any).configuration || "",
        form_name: payload.source || "",
        gclid: (payload as any).gclid || "",
        utm_source: (payload as any).utm_source || "",
        utm_medium: (payload as any).utm_medium || "",
        utm_campaign: (payload as any).utm_campaign || "",
        utm_term: (payload as any).utm_term || "",
        device: (payload as any).device || "",
        trigger: (payload as any).trigger || "",
        page_url: (payload as any).page_url || "",
        project_name: payload.project || "Keshavaa La Arena"
      };

      fetch(googleSheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sheetData),
      }).catch(err => console.error('Google Sheets error:', err));

      setSubmitted(true);
      setTimeout(() => {
        window.location.href = '/thankyou';
      }, 1000);
    } catch (error) {
      console.error('Lead submission failed:', error);
      alert("Submission failed. Please try again.");
      setIsSubmitting(false);
    }
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

<form
  className="lead-form"
  onSubmit={handleSubmit}
  autoComplete="off"
>
  {/* Honeypot Field */}
  <div style={{ display: 'none' }}>
    <input
      type="text"
      name="website"
      value={formData.honeypot}
      onChange={(e) =>
        setFormData({
          ...formData,
          honeypot: e.target.value,
        })
      }
      tabIndex={-1}
      autoComplete="off"
    />
  </div>

  {/* Autofill traps */}
  <input
    type="text"
    name="fake_username"
    autoComplete="username"
    style={{ display: 'none' }}
  />

  <input
    type="password"
    name="fake_password"
    autoComplete="new-password"
    style={{ display: 'none' }}
  />

  <div className="form-group">
    <label>FULL NAME</label>
    <input
      type="text"
      name="name"
      placeholder="Marcus Aurelius"
      required
      value={formData.name}
      onChange={(e) =>
        setFormData({
          ...formData,
          name: e.target.value,
        })
      }
      autoComplete="new-password"
    />
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>DIRECT TELEPHONE</label>
      <input
        type="tel"
        name="phone"
        placeholder="+91 . . . . . . . . . ."
        required
        value={formData.phone}
        onChange={(e) =>
          setFormData({
            ...formData,
            phone: e.target.value,
          })
        }
        autoComplete="new-password"
        inputMode="numeric"
      />
    </div>

    <div className="form-group">
      <label>CITY</label>
      <input
        type="text"
        name="city"
        placeholder="Your City"
        required
        value={formData.city}
        onChange={(e) =>
          setFormData({
            ...formData,
            city: e.target.value,
          })
        }
        autoComplete="new-password"
      />
    </div>
  </div>

  <button
    type="submit"
    className="submit-btn"
    disabled={isSubmitting}
  >
    {isSubmitting
      ? 'SUBMITTING...'
      : 'REGISTER INTEREST'}{' '}
    <span className="arrow">→</span>
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
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
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
