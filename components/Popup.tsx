'use client';

import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  useEffect(() => {
    // TRIGGER ON OPEN: Open the popup immediately when the website loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200); // 1.2s delay for a smoother entry after initial hero load

    // Listen for manual triggers (e.g. #enquire clicks)
    const handleHashChange = () => {
      if (window.location.hash === '#enquire') {
        setIsVisible(true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    // Remove the hash from URL if present
    if (window.location.hash === '#enquire') {
      window.history.replaceState(null, '', ' ');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Captured:', formData);
    alert('Thank you. A Keshavaa Specialist will contact you shortly.');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>✕</button>
        
        <div className="popup-header">
           <span className="eyebrow">PRIVATE ACCESS</span>
           <h2 className="title">Request <span>Invitation.</span></h2>
           <p className="desc">Register for a private viewing of our bespoke Goa residences.</p>
        </div>

        <form onSubmit={handleSubmit} className="popup-form">
          <div className="input-group">
            <input 
              type="text" 
              name="name" 
              placeholder="YOUR NAME" 
              required 
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input 
              type="tel" 
              name="phone" 
              placeholder="PHONE NUMBER" 
              required 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-btn">REQUEST INVITE</button>
        </form>

        <p className="footer-note">EXCLUSIVE KESHAVAA SIGNATURE ESTATE</p>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed; inset: 0; background: rgba(8, 22, 23, 0.95);
          backdrop-filter: blur(15px); z-index: 10000;
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: fadeIn 0.4s ease;
        }

        .popup-content {
          background: #ffffff; width: 100%; max-width: 420px;
          padding: 50px; border-radius: 8px; position: relative;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .close-btn {
          position: absolute; top: 20px; right: 20px;
          background: none; border: none; font-size: 20px;
          cursor: pointer; color: var(--text-primary); opacity: 0.3;
          transition: opacity 0.3s;
        }
        .close-btn:hover { opacity: 1; }

        .popup-header { text-align: center; margin-bottom: 35px; }
        .eyebrow {
          display: block; font-family: var(--font-inter); font-size: 10px;
          font-weight: 800; letter-spacing: 0.5em; color: var(--accent-primary);
          margin-bottom: 15px;
        }
        .title {
          font-family: var(--font-inter); font-size: 32px; font-weight: 300;
          color: var(--text-primary); margin-bottom: 15px; letter-spacing: -1px;
        }
        .title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }
        .desc { font-family: var(--font-inter); font-size: 14px; color: var(--text-secondary); line-height: 1.5; }

        .popup-form { display: flex; flex-direction: column; gap: 20px; }
        
        input {
          width: 100%; padding: 16px; border: none; background: #f8fcfc;
          border-bottom: 2px solid #eee; font-family: var(--font-inter);
          font-size: 12px; font-weight: 700; letter-spacing: 1px;
          transition: border-color 0.3s;
        }
        input:focus { outline: none; border-color: var(--accent-primary); background: #fff; }

        .submit-btn {
          background: var(--accent-primary); color: #fff; border: none;
          padding: 18px; font-family: var(--font-inter); font-weight: 900;
          font-size: 11px; letter-spacing: 3px; cursor: pointer;
          transition: transform 0.3s, background 0.3s; border-radius: 4px;
          margin-top: 10px;
        }
        .submit-btn:hover { background: var(--bg-deep); transform: translateY(-3px); }

        .footer-note {
           text-align: center; margin-top: 30px; font-family: var(--font-inter);
           font-size: 9px; font-weight: 800; letter-spacing: 2px;
           color: var(--text-primary); opacity: 0.3;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 480px) {
           .popup-content { padding: 40px 25px; }
           .title { font-size: 28px; }
        }
      `}</style>
    </div>
  );
};

export default Popup;
