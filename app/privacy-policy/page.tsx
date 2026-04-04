'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <Header />
      <section className="policy-section">
        <div className="container">
          <div className="policy-content animate-fade-in">
            <h1 className="luxury-title">Privacy Policy</h1>
            <p className="last-updated">Last Updated: April 2026</p>
            
            <div className="policy-intro">
               <p>At Keshavaa Developers, we respect the privacy of our website visitors and are committed to protecting the personal information you share with us. This Privacy Policy details how we handle the data collected through our digital platforms for our project, <strong>La Arena</strong> in Nerul, Goa.</p>
            </div>

            <div className="content-block">
              <h2>1. Collection of Information</h2>
              <p>We collect essential information to process your interest in our properties. This includes:</p>
              <ul>
                <li><strong>Identity Data:</strong> Full name and contact preferences.</li>
                <li><strong>Contact Data:</strong> Email address, phone number, and mailing address.</li>
                <li><strong>Technical Data:</strong> IP address, time zone settings, and browser type (collected via GTM/Analytics).</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>2. Purpose of Data Processing</h2>
              <p>Your information is processed for clearly defined purposes:</p>
              <ul>
                <li>To provide project brochures, price lists, and floor plans.</li>
                <li>To schedule site visits or virtual tours.</li>
                <li>To comply with regulatory requirements, including GoRERA disclosures.</li>
                <li>To improve our digital experience via anonymous tracking.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>3. Data Sharing & Security</h2>
              <p>We do not sell your personal information to third-party data brokers. Data sharing is limited to:</p>
              <ul>
                <li>Authorised sales representatives and channel partners.</li>
                <li>Cloud storage and CRM providers (e.g., B2BBricks) used for data management.</li>
                <li>Regulatory authorities when required by law.</li>
              </ul>
              <p>We implement professional SSL encryption and server-side security protocols to safeguard your information from unauthorised access.</p>
            </div>

            <div className="content-block">
              <h2>4. Cookie Policy</h2>
              <p>Our website uses functional and analytical cookies to recognize returning visitors and track high-level conversion metrics through Google Analytics. You may disable cookies in your browser settings, though this may limit functionality.</p>
            </div>

            <div className="content-block">
              <h2>5. Your Rights</h2>
              <p>You have the right to request access to the data we hold about you or ask for its deletion from our marketing CRM. For any privacy concerns, contact us at <a href="mailto:sales@keshavaa-properties.site">sales@keshavaa-properties.site</a>.</p>
            </div>

            <div className="content-block">
              <h2>6. RERA Compliance</h2>
              <p>All information on this website is for informational purposes. Final details are as per the registered RERA documentation for <strong>La Arena</strong> (RERA No: PRGO9252540).</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .privacy-page {
            background-color: #fcfcfc;
        }
        .policy-section {
          padding: 180px 0 100px;
          min-height: 80vh;
        }

        .policy-content {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 80px;
          border-radius: 4px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .luxury-title {
          font-family: var(--font-playfair);
          font-size: 42px;
          margin-bottom: 15px;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        .last-updated {
          color: var(--accent-primary);
          font-family: var(--font-inter);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 60px;
          display: block;
        }

        .policy-intro {
            border-left: 3px solid var(--accent-primary);
            padding-left: 30px;
            margin-bottom: 50px;
        }

        .policy-intro p {
            font-size: 18px;
            color: #333;
            font-style: italic;
        }

        .content-block {
          margin-bottom: 50px;
        }

        h2 {
          font-family: var(--font-playfair);
          font-size: 20px;
          margin-bottom: 20px;
          color: #1a1a1a;
          font-weight: 600;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          padding-bottom: 10px;
          display: inline-block;
        }

        p {
          color: #555;
          line-height: 1.8;
          font-size: 15px;
          margin-bottom: 15px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }

        ul li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 12px;
            color: #555;
            font-size: 15px;
            line-height: 1.6;
        }

        ul li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: var(--accent-primary);
            font-weight: bold;
        }

        a {
            color: var(--accent-primary);
            text-decoration: none;
            font-weight: 500;
        }

        @media (max-width: 768px) {
          .policy-content {
            padding: 40px 24px;
            box-shadow: none;
            border: none;
          }
          .policy-section { padding-top: 120px; }
          .luxury-title { font-size: 32px; }
          .policy-intro { padding-left: 20px; }
          .policy-intro p { font-size: 16px; }
        }
      `}</style>
    </main>
  );
}
