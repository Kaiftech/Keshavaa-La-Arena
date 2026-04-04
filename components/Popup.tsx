'use client';

import React, { useState, useEffect, useCallback } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const showPopup = useCallback(() => {
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, [isDismissed]);

  useEffect(() => {
    // 1. Time delay: 8 seconds
    const timer = setTimeout(() => {
      showPopup();
    }, 8000);

    // 2. Scroll trigger: 35%
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 35) {
        showPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // 3. Exit Intent (Desktop only)
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
        document.removeEventListener('mouseleave', handleExitIntent);
      }
    };

    // 4. Hash trigger
    const handleHashChange = () => {
      if (window.location.hash === '#enquire') {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleExitIntent);
    window.addEventListener('hashchange', handleHashChange);
    
    // Check initial hash
    if (window.location.hash === '#enquire') {
        setIsVisible(true);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
    };
  }, [showPopup]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'NAME IS REQUIRED';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'INVALID PHONE';
    if (!formData.city) newErrors.city = 'CITY IS REQUIRED';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const closePopup = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (window.location.hash === '#enquire') {
      window.history.replaceState(null, '', ' ');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const payload = {
        name: formData.name,
        mobile: formData.phone,
        city: formData.city,
        source: "Website Popup",
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
        
        window.location.href = '/thankyou';
      } catch (error) {
        console.error('Lead submission failed:', error);
        window.location.href = '/thankyou';
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={closePopup}>✕</button>
        
        <div className="popup-header">
           <span className="eyebrow">LIMITED INVITATION</span>
           <h2 className="title">Get <span>Price List.</span></h2>
           <p className="desc">Before you go — download the official brochure and availability list for La Arena, Goa.</p>
        </div>

        <form onSubmit={handleSubmit} className="popup-form">
          <div className="input-group">
            <input 
              type="text" name="name" placeholder="YOUR NAME" 
              required value={formData.name} onChange={handleInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="input-group">
            <input 
              type="tel" name="phone" placeholder="PHONE NUMBER" 
              required value={formData.phone} onChange={handleInputChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="input-group">
            <input 
              type="text" name="city" placeholder="YOUR CITY" 
              required value={formData.city} onChange={handleInputChange}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
          <button type="submit" className="submit-btn" disabled={!formData.name || !formData.phone || !formData.city}>DOWNLOAD BROCHURE</button>
        </form>

        <div className="social-proof">
            <div className="avatar-group">
                <div className="avatar">JS</div>
                <div className="avatar">RK</div>
                <div className="avatar">MP</div>
            </div>
            <p>Join 200+ families who've already enquired</p>
        </div>

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
          position: absolute; top: 30px; right: 30px;
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
        
        .input-group { position: relative; }
        .error {
           position: absolute; right: 10px; top: 18px;
           font-family: var(--font-inter); font-size: 8px; font-weight: 900;
           color: #ff4444; letter-spacing: 1px;
        }

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

        .social-proof {
            margin-top: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #fdfaf5;
            padding: 12px;
            border-radius: 6px;
        }
        .avatar-group { display: flex; }
        .avatar {
            width: 24px; height: 24px; border-radius: 50%;
            background: var(--accent-primary); color: #fff;
            font-size: 8px; font-weight: 800;
            display: flex; align-items: center; justify-content: center;
            border: 2px solid #fff; margin-right: -8px;
        }
        .social-proof p {
            font-family: var(--font-inter); font-size: 11px;
            font-weight: 600; color: var(--text-secondary);
        }

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
