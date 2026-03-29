'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // If clicking inside the popup or on the close button, don't re-trigger it
      if (target.closest('.popup-content') || target.closest('.close-btn')) return;
      
      // Only trigger on "Interactive" or "High Intent" elements
      // 1. Buttons and Links
      // 2. Property Cards (Specs, Amenities, Floor Plans)
      const isInteractive = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('.spec-card') || 
        target.closest('.amenity-card') || 
        target.closest('.plan-card');
      if (isInteractive) {
        setIsVisible(true);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const closePopup = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Popup Form Submitted:', formData);
    window.location.href = '/thank-you';
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>×</button>
        
        <div className="popup-left">
           <Image 
             src="/assets/KESHAVAA LOGO.webp" 
             alt="Keshavaa logo" 
             width={180} 
             height={60}
             className="popup-logo"
           />
           <h2 className="font-luxury">LA ARENA</h2>
           <p className="popup-subtitle">Luxury Residential Nerul, Goa</p>
           
           <ul className="popup-features">
             <li>✓ Limited Time Opportunity</li>
             <li>✓ High ROI Investment Potential</li>
             <li>✓ Best Rental Yields in Goa</li>
           </ul>
        </div>

        <div className="popup-right">
          <h3>Register Now</h3>
          <p>Get exclusive access to pricing & floor plans.</p>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Full Name" 
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
            <button type="submit" className="btn-premium aggressive-btn">
              GET BROCHURE NOW
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5000;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .popup-content {
          background: white;
          width: 100%;
          max-width: 850px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          border-radius: var(--radius-squircle, 40px);
          overflow: hidden;
          box-shadow: 0 30px 100px rgba(0,0,0,0.5);
          animation: popupScale 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes popupScale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          color: #999;
          z-index: 10;
        }

        .popup-left {
          background: var(--secondary);
          color: white;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .popup-logo {
          margin-bottom: 30px;
          filter: brightness(0) invert(1);
        }

        .popup-subtitle {
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.8rem;
          text-transform: uppercase;
        }

        .popup-features {
          list-style: none;
          padding: 0;
          margin-top: 40px;
          text-align: left;
        }

        .popup-features li {
          font-size: 0.9rem;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .popup-right {
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .popup-right h3 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .popup-right p {
          color: var(--text-muted);
          margin-bottom: 30px;
        }

        input {
          width: 100%;
          padding: 15px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: inherit;
        }

        .aggressive-btn {
          width: 100%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }

        @media (max-width: 768px) {
          .popup-content {
            grid-template-columns: 1fr;
          }
          .popup-left {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Popup;
