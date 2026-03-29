'use client';

import React from 'react';
import Image from 'next/image';

const Amenities = () => {
  const items = [
    { 
      title: 'Turquoise <span>Infinity</span>', 
      subtitle: 'ROOFTOP POOL', 
      img: '/assets/amenity-pool.png',
      desc: 'Flowing uninterrupted sunsets over the coastline.'
    },
    { 
      title: 'River <span>Sanctuary</span>', 
      subtitle: 'PRIVATE DOCK', 
      img: '/assets/amenity-river.png',
      desc: 'Exclusive access to the serene riverfront.'
    },
    { 
      title: 'Wellness <span>Spa</span>', 
      subtitle: 'JACUZZI', 
      img: '/assets/amenity-gym.png',
      desc: 'Sanctuary designed for rejuvenation.'
    },
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="side-line left" />
      <div className="side-line right" />

      <div className="container">
        <div className="amenities-header">
           <div className="title-area">
             <span className="eyebrow">SIGNATURE LIFESTYLE</span>
             <h2 className="title">
                Curated <span>Living.</span>
             </h2>
           </div>
           <div className="header-detail">
             <span className="num">003</span>
             <p className="desc-text">Refined details honoring the Keshavaa legacy.</p>
           </div>
        </div>

        <div className="amenities-grid">
          {items.map((item, i) => (
            <div key={i} className="amenity-card">
              <div className="img-wrap">
                <Image src={item.img} alt={item.subtitle} fill style={{ objectFit: 'cover' }} className="amenity-img" />
                <div className="img-overlay" />
                <span className="card-num">{i + 1}</span>
              </div>
              <div className="content">
                <span className="subtitle">{item.subtitle}</span>
                <h3 className="card-title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .amenities-section {
           background: var(--bg-creme);
           padding: 100px 0;
           position: relative;
           border-bottom: 1px solid var(--border-subtle);
        }

        .side-line {
           position: absolute; top: 0; bottom: 0; width: 1px; background: var(--accent-primary); opacity: 0.1;
        }
        .left { left: 5%; }
        .right { right: 5%; }

        .amenities-header {
           display: flex; justify-content: space-between; align-items: flex-end;
           margin-bottom: 60px;
        }

        .eyebrow {
           display: block; font-family: var(--font-inter); font-size: 11px;
           font-weight: 800; letter-spacing: 0.8em; color: var(--accent-primary);
           margin-bottom: 20px;
        }

        .title {
           font-family: var(--font-inter); font-size: 58px; font-weight: 300;
           line-height: 1.1; color: var(--text-primary); letter-spacing: -3px;
        }
        .title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }

        .header-detail { display: flex; align-items: flex-start; gap: 20px; text-align: right; }
        .num { font-size: 12px; font-weight: 800; color: var(--accent-primary); opacity: 0.3; font-family: var(--font-inter); }
        .desc-text { font-family: var(--font-inter); font-size: 15px; color: var(--text-secondary); max-width: 250px; }

        .amenities-grid {
           display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;
        }

        .img-wrap {
           position: relative; width: 100%; height: 320px;
           overflow: hidden; border-radius: 4px; margin-bottom: 30px;
           border: 1px solid var(--border-subtle);
        }
        .img-overlay { position: absolute; inset: 0; background: rgba(8, 22, 23, 0.05); z-index: 10; transition: background 0.4s; }
        .amenity-card:hover .img-overlay { background: rgba(8, 22, 23, 0); }

        .card-num {
           position: absolute; top: 20px; right: 20px; z-index: 20;
           font-family: var(--font-playfair); font-size: 20px; font-style: italic; color: #fff;
           opacity: 0.5;
        }

        .amenity-img { transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .amenity-card:hover .amenity-img { transform: scale(1.08); }

        .subtitle {
           display: block; font-family: var(--font-inter); font-size: 10px;
           font-weight: 800; letter-spacing: 0.4em; color: var(--accent-primary);
           margin-bottom: 12px; text-transform: uppercase;
        }
        .card-title {
           font-family: var(--font-playfair); font-size: 26px; color: var(--text-primary);
           margin-bottom: 15px; line-height: 1.2;
        }
        .card-title :global(span) { font-style: italic; color: var(--accent-primary); }
        .card-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; opacity: 0.7; }

        @media (max-width: 1024px) {
           .title { font-size: 45px; }
           .amenities-grid { grid-template-columns: 1fr; gap: 60px; }
           .amenities-header { flex-direction: column; align-items: flex-start; gap: 20px; }
           .header-detail { text-align: left; }
           .side-line { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Amenities;
