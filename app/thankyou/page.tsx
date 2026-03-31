'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <div className="thankyou-wrapper">
      <div className="branding-header">
        <Link href="/">
           <Image 
             src="/assets/KESHAVAA LOGO.webp" 
             alt="Keshavaa Luxury" 
             width={180} 
             height={60} 
             priority
           />
        </Link>
      </div>

      <div className="thankyou-content">
        <div className="success-icon">✓</div>
        <span className="eyebrow">REGISTRY CONFIRMED</span>
        <h1 className="title">Thank <span>You.</span></h1>
        <p className="desc">A Keshavaa Specialist has received your inquiry and will contact you directly to arrange your private viewing of La Arena.</p>
        
        <Link href="/" className="return-btn">
          RETURN TO COLLECTION <span className="arrow">→</span>
        </Link>
      </div>

      <style jsx>{`
        .thankyou-wrapper {
          min-height: 100vh;
          background: #fcfcfc;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .branding-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 40px;
          display: flex;
          justify-content: center;
        }

        .thankyou-content {
          margin: auto;
          text-align: center;
          max-width: 500px;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: reveal 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          border: 1px solid rgba(154, 128, 94, 0.4);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 40px;
          animation: pulse 2s infinite;
        }

        .eyebrow {
          display: block;
          font-family: var(--font-inter);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5em;
          color: var(--accent-primary);
          margin-bottom: 20px;
        }

        .title {
          font-family: var(--font-inter);
          font-size: 5rem;
          font-weight: 300;
          color: var(--bg-deep);
          margin-bottom: 24px;
          line-height: 1;
        }

        .title span {
          font-family: var(--font-playfair);
          font-style: italic;
          color: var(--accent-primary);
        }

        .desc {
          font-family: var(--font-inter);
          font-size: 16px;
          color: rgba(3, 3, 3, 0.6);
          line-height: 1.6;
          margin-bottom: 50px;
        }

        .return-btn {
          display: inline-flex;
          align-items: center;
          background: var(--bg-deep);
          color: #fff;
          text-decoration: none;
          padding: 20px 40px;
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          transition: background 0.4s ease;
        }

        .return-btn:hover {
          background: var(--accent-primary);
        }

        .arrow {
          margin-left: 10px;
          transition: transform 0.3s ease;
        }

        .return-btn:hover .arrow {
          transform: translateX(5px);
        }

        @keyframes reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(154, 128, 94, 0.1); }
          50% { box-shadow: 0 0 0 15px rgba(154, 128, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(154, 128, 94, 0); }
        }

        @media (max-width: 768px) {
          .title { font-size: 3.5rem; }
        }
      `}</style>
    </div>
  );
}
