'use client';

import React from 'react';
import Link from 'next/link';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-container animate-fade-up">
        <div className="success-icon">✓</div>
        <h1 className="font-luxury">THANK YOU</h1>
        <p className="premium-tag">FOR YOUR INTEREST IN LA ARENA</p>
        
        <div className="message-box">
          <p>Our executive will get in touch with you shortly with exclusive pricing and the project brochure.</p>
        </div>

        <div className="next-steps">
          <Link href="/" className="btn-premium">BACK TO WEBSITE</Link>
          <a href="https://wa.me/91XXXXXXXXXX" className="btn-premium whatsapp-btn">WHATSAPP US</a>
        </div>
      </div>

      <style jsx>{`
        .thank-you-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 20px;
        }

        .thank-you-container {
          max-width: 600px;
          text-align: center;
          background: white;
          padding: 60px 40px;
          border-radius: var(--radius-squircle, 40px);
          box-shadow: 0 30px 100px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin: 0 auto 30px;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
        }

        h1 {
          font-size: 3rem;
          letter-spacing: 5px;
          color: var(--secondary);
          margin-bottom: 5px;
        }

        .premium-tag {
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.8rem;
          margin-bottom: 40px;
        }

        .message-box {
          margin-bottom: 40px;
          padding: 30px;
          background: #fdfdfd;
          border-radius: 20px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .next-steps {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .whatsapp-btn {
          background: #25d366 !important;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.2) !important;
        }

        @media (max-width: 600px) {
          .next-steps {
            flex-direction: column;
          }
          
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
