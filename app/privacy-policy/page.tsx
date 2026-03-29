'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <section className="policy-section">
        <div className="container">
          <div className="policy-content animate-fade-up">
            <h1 className="font-luxury">Privacy Policy</h1>
            <p className="last-updated">Last Updated: March 2026</p>
            
            <div className="content-block">
              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us through our lead capture forms. This includes your name, email address, and phone number.</p>
            </div>

            <div className="content-block">
              <h2>2. How We Use Your Information</h2>
              <p>We use the information collected to respond to your enquiries about our luxury residential project, La Arena. We may contact you via phone or email for marketing purposes related to this project.</p>
            </div>

            <div className="content-block">
              <h2>3. Data Protection</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
            </div>

            <div className="content-block">
              <h2>4. Third-Party Access</h2>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business.</p>
            </div>

            <div className="content-block">
              <h2>5. Your Consent</h2>
              <p>By using our site, you consent to our privacy policy.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .policy-section {
          padding-top: 150px;
          min-height: 80vh;
          background: var(--bg-alt);
        }

        .policy-content {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          padding: 60px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 30px;
          color: var(--secondary);
          border-bottom: 2px solid var(--primary);
          padding-bottom: 20px;
        }

        .last-updated {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 50px;
        }

        .content-block {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: var(--secondary);
          font-weight: 600;
        }

        p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        @media (max-width: 768px) {
          .policy-content {
            padding: 40px 20px;
          }
          
          h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </main>
  );
}
