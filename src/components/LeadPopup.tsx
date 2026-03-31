'use client';

import React, { useState, useEffect } from 'react';

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadPopup({ isOpen, onClose }: LeadPopupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form status when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to webhook
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Lead Captured:', data);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      
      // Tracking pixel/GTM trigger
      if (typeof window !== 'undefined') {
        const anyWindow = window as any;
        if (anyWindow.fbq) anyWindow.fbq('track', 'Lead');
        if (anyWindow.dataLayer) anyWindow.dataLayer.push({ event: 'lead_form_submitted' });
      }

    } catch (err) {
      alert('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} style={{ display: 'flex' }} onClick={(e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('modal')) onClose();
    }}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        
        {!isSubmitted ? (
          <div id="formSection">
            <h2 style={{ color: 'var(--warm-gold)', marginBottom: '10px' }}>Get Exclusive Details</h2>
            <p style={{ color: 'var(--frost-white)', marginBottom: '30px', fontSize: '0.9rem', opacity: 0.8 }}>
              Register now for pricing, availability, and high-res floor plans.
            </p>
            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="full_name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone_number" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Optional Message (e.g. 1 BHK / 2 BHK)" rows={2}></textarea>
              </div>
              
              {/* UTM fields could be populated here or stored in a parent */}
              
              <button type="submit" className="btn btn-gold-filled" disabled={isSubmitting} style={{ width: '100%' }}>
                {isSubmitting ? 'Processing...' : 'Get Exclusive Details'}
              </button>
            </form>
          </div>
        ) : (
          <div className="thank-you active">
            <h3 style={{ color: 'var(--warm-gold)', marginBottom: '20px' }}>Thank You!</h3>
            <p style={{ color: 'var(--frost-white)', marginBottom: '20px' }}>Our project expert will reach out shortly.</p>
            <div style={{ margin: '20px 0' }}>
              <a href="https://wa.me/916262962621" className="btn btn-whatsapp" style={{ justifyContent: 'center', display: 'flex' }}>
                Chat on WhatsApp
              </a>
            </div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Or call us: <a href="tel:+916262962621" style={{ color: 'var(--warm-gold)', textDecoration: 'none' }}>+91 62629 62621</a>
            </p>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          opacity: 1;
          visibility: visible;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-content {
          background: var(--white);
          border-radius: 24px;
          width: 90%;
          max-width: 480px;
          padding: 60px 40px;
          position: relative;
          text-align: center;
          box-shadow: 0 40px 100px -20px rgba(30, 41, 59, 0.25);
        }
        .modal-close {
          position: absolute;
          top: 25px;
          right: 25px;
          color: var(--dark-slate);
          font-size: 24px;
          cursor: pointer;
          opacity: 0.5;
          transition: var(--transition);
        }
        .modal-close:hover {
          opacity: 1;
          color: var(--bright-aqua);
          transform: rotate(90deg);
        }
        .lead-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          background: #F8FAFC;
          border: 2px solid transparent;
          color: var(--dark-slate);
          font-family: var(--sans-font);
          border-radius: 12px;
          transition: var(--transition);
          font-size: 1rem;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--bright-aqua);
          background: var(--white);
        }
      `}</style>
    </div>
  );
}
