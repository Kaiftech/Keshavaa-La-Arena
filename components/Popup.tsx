'use client';

import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initial check for hash
    if (window.location.hash === '#enquire') setIsVisible(true);

    const checkHash = () => {
      if (window.location.hash === '#enquire') {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    window.history.replaceState(null, '', ' '); // Clear hash
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
       setSubmitted(false);
       closePopup();
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="compact-overlay">
      <div className="backdrop" onClick={closePopup} />
      <div className="compact-modal">
        <button className="close-trigger" onClick={closePopup}>✕</button>
        {submitted ? (
          <div className="success">
            <h3>Thank You.</h3>
            <p>Our concierge will reach out instantly.</p>
          </div>
        ) : (
          <div className="form-content">
            <div className="header">
               <h2>Direct <span>Enquiry.</span></h2>
               <p>Quick access to floor plans and pricing.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="field">
                <input 
                  type="tel" 
                  placeholder="Mobile Number" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <button type="submit">Unlock Access</button>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .compact-overlay {
          position: fixed; inset: 0; z-index: 99999;
          display: flex; align-items: center; justify-content: center;
          padding: 15px;
        }
        .backdrop {
           position: absolute; inset: 0;
           background: rgba(8, 22, 23, 0.8);
           backdrop-filter: blur(12px);
        }
        .compact-modal {
           position: relative;
           background: #ffffff;
           width: 100%; max-width: 400px;
           padding: 40px;
           border-radius: 12px;
           box-shadow: 0 30px 60px rgba(0,0,0,0.3);
           animation: popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .close-trigger {
           position: absolute; top: 15px; right: 15px;
           border: none; background: none; font-size: 18px; color: var(--text-secondary);
           cursor: pointer; padding: 5px;
        }
        .header { margin-bottom: 25px; text-align: center; }
        .header h2 { font-family: var(--font-inter); font-size: 26px; font-weight: 300; }
        .header h2 span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }
        .header p { font-size: 13px; color: var(--text-secondary); margin-top: 5px; }
        
        form { display: flex; flex-direction: column; gap: 15px; }
        .field input {
           width: 100%; padding: 15px;
           background: #f8f8f8; border: 1px solid #eee;
           border-radius: 8px; font-family: var(--font-inter); font-size: 15px;
           outline: none; transition: border-color 0.3s;
        }
        .field input:focus { border-color: var(--accent-primary); }
        
        button {
           background: var(--bg-deep); color: white;
           padding: 16px; border: none; border-radius: 8px;
           font-family: var(--font-inter); font-weight: 700; font-size: 13px;
           text-transform: uppercase; letter-spacing: 2px;
           cursor: pointer; transition: background 0.3s; margin-top: 10px;
        }
        button:hover { background: var(--accent-primary); }

        .success { text-align: center; padding: 20px 0; }
        .success h3 { font-family: var(--font-inter); font-size: 24px; margin-bottom: 10px; color: var(--accent-primary); }
        .success p { font-size: 14px; color: var(--text-secondary); }

        @keyframes popIn {
           from { opacity: 0; transform: scale(0.95) translateY(10px); }
           to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Popup;
