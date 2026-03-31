'use client';

import React from 'react';
import Image from 'next/image';

const Amenities = () => {


  return (
    <section id="amenities" className="amenities-section">
      <div className="side-line left" />
      <div className="side-line right" />

      <div className="container">

        <div className="curated-features">
          <div className="map-text-header">
             <span className="eyebrow">SIGNATURE LIFESTYLE</span>
             <h2 className="title">Curated <span>Features.</span></h2>
          </div>
          <ul className="features-list">
            <li><span className="bullet"></span>River facing Rooftop Infinity Pool</li>
            <li><span className="bullet"></span>Fully Equipped Fitness Centre</li>
            <li><span className="bullet"></span>Exclusive Kids’ Play Lounge</li>
            <li><span className="bullet"></span>Jacuzzi</li>
            <li><span className="bullet"></span>Dedicated parking</li>
            <li><span className="bullet"></span>24/7 security</li>
          </ul>
        </div>

        <div className="location-map">
           <div className="map-text-header">
              <span className="eyebrow">LOCATION</span>
              <h2 className="title">Discover <span>Nerul.</span></h2>
           </div>
           <a href="#enquire" className="map-wrapper">
              <iframe 
                 src="https://maps.google.com/maps?q=Nerul,+Goa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, pointerEvents: 'none' }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade" 
                 className="map-iframe"
              ></iframe>
              <div className="map-overlay">
                 <div className="pin-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-primary)" xmlns="http://www.w3.org/2000/svg">
                       <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                 </div>
                 <p className="map-text">Nerul, Goa<br/><span>Click to Enquire</span></p>
              </div>
           </a>
        </div>
      </div>

      <style jsx>{`
        .amenities-section {
           background: var(--bg-creme);
           padding: 40px 0;
           position: relative;
           border-bottom: 1px solid var(--border-subtle);
        }

        .side-line {
           position: absolute; top: 0; bottom: 0; width: 1px; background: var(--accent-primary); opacity: 0.1;
        }
        .left { left: 5%; }
        .right { right: 5%; }


        .curated-features {
           margin-top: 0px;
        }
        .eyebrow {
           display: block; font-family: var(--font-inter); font-size: 11px;
           font-weight: 800; letter-spacing: 0.8em; color: var(--accent-primary);
           margin-bottom: 20px; text-transform: uppercase;
        }
        .title {
           font-family: var(--font-inter); font-size: 58px; font-weight: 300;
           line-height: 1.1; color: var(--text-primary); letter-spacing: -3px;
        }
        .title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }
        .features-list {
           display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
           list-style: none; padding: 0; max-width: 800px; margin: 0 auto;
        }
        .features-list li {
           font-family: var(--font-inter); font-size: 16px; color: var(--text-primary);
           display: flex; align-items: center; gap: 15px; font-weight: 500;
        }
        .bullet {
           width: 6px; height: 6px; background: var(--accent-primary); border-radius: 50%;
           display: inline-block;
        }

        .location-map {
           margin-top: 100px;
        }
        .map-text-header {
           text-align: center; margin-bottom: 40px;
        }
        .map-wrapper {
           display: block; width: 100%; height: 400px;
           background: #e6e3df;
           position: relative; overflow: hidden;
           text-decoration: none; border-radius: 8px; cursor: pointer;
           border: 1px solid var(--border-subtle);
           transition: border-color 0.4s ease;
        }
        .map-iframe {
           display: block; width: 100%; height: 100%;
        }
        .map-wrapper:hover {
           border-color: var(--accent-primary);
        }
        .map-overlay {
           position: absolute; inset: 0; display: flex; flex-direction: column;
           align-items: center; justify-content: center;
           background: rgba(8, 22, 23, 0.04); transition: background 0.3s ease;
        }
        .map-wrapper:hover .map-overlay { background: rgba(8, 22, 23, 0.08); }
        .pin-icon {
           animation: float 3s ease-in-out infinite; margin-bottom: 10px;
        }
        .map-text {
           font-family: var(--font-inter); font-size: 20px; font-weight: 800;
           color: var(--bg-deep); text-align: center; line-height: 1.5;
        }
        .map-text span {
           display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: 2px;
           text-transform: uppercase; color: #ffffff; background: var(--accent-primary);
           padding: 12px 24px; border-radius: 4px; margin-top: 15px;
           transition: all 0.3s ease;
        }
        .map-wrapper:hover .map-text span {
           background: #ffffff; color: #000000; transform: translateY(-3px);
           box-shadow: 0 10px 25px rgba(115, 172, 196, 0.3);
        }
        @keyframes float {
           0% { transform: translateY(0); }
           50% { transform: translateY(-8px); }
           100% { transform: translateY(0); }
        }

        @media (max-width: 1024px) {
           .title { font-size: 45px; }
           .features-list { grid-template-columns: 1fr; gap: 15px; }
        }
      `}</style>
    </section>
  );
};

export default Amenities;
