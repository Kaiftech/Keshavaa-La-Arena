'use client';

import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/assets/bulding1.png', label: 'THE <span>EXTERIOR</span> DETAIL', size: 'tall', code: 'A.01' },
    { src: '/assets/bulding2.png', label: 'THE <span>PRIVATE</span> ATRIUM', size: 'short', code: 'A.02' },
    { src: '/assets/amenity-river.png', label: 'THE <span>PANORAMIC</span> DECK', size: 'short', code: 'A.03' },
    { src: '/assets/amenity-jacuzzi.png', label: 'THE <span>BEYOND</span> VISTAS', size: 'tall', code: 'A.04' },
    { src: '/assets/amenity-pool.png', label: 'THE <span>ESTATE</span> GARDEN', size: 'short', code: 'A.05' },
    { src: '/assets/bulding4.png', label: 'THE <span>RIVIERA</span> HALL', size: 'tall', code: 'A.06' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
           <div className="header-text">
             <span className="eyebrow">VISUAL DISCOVERY</span>
             <h2 className="title">Visual <span>Poetry.</span></h2>
           </div>
           <div className="counter-box">06 / <span>EXCEPTIONAL ARCHIVES</span></div>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className={`gallery-item ${i % 2 !== 0 ? 'offset-item' : ''}`}>
              <div className={`img-wrapper ${img.size === 'tall' ? 'h-tall' : 'h-short'}`}>
                <div className="asset-tag">{img.code}</div>
                <Image src={img.src} alt="Gallery" fill style={{ objectFit: 'cover' }} className="gal-img" />
              </div>
              <div className="gal-label-wrap">
                 <div className="gal-line" />
                 <span className="gal-label" dangerouslySetInnerHTML={{ __html: img.label }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-section {
           background: #ffffff;
           padding: 120px 0;
           border-top: 1px solid var(--border-subtle);
           position: relative;
        }

        .gallery-header {
           display: flex; justify-content: space-between; align-items: flex-end;
           margin-bottom: 80px;
        }

        .eyebrow {
           display: block; font-family: var(--font-inter); font-size: 11px;
           font-weight: 800; letter-spacing: 0.8em; color: var(--accent-primary);
           margin-bottom: 25px;
        }

        .title {
           font-family: var(--font-inter); font-size: 58px; font-weight: 300;
           line-height: 1.1; color: var(--text-primary); letter-spacing: -3px;
        }
        .title span { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); }

        .counter-box {
           font-family: var(--font-inter); font-size: 10px; font-weight: 900;
           letter-spacing: 0.3em; color: var(--text-primary); opacity: 0.3;
        }
        .counter-box span { font-weight: 500; font-size: 8px; }

        .gallery-grid {
           display: grid; grid-template-columns: 1fr 1fr;
           column-gap: 60px; row-gap: 80px; align-items: start;
        }

        .offset-item { margin-top: 100px; }

        .img-wrapper {
           position: relative; width: 100%; overflow: hidden;
           border: 1px solid var(--border-subtle); border-radius: 4px;
        }
        .h-tall { height: 600px; }
        .h-short { height: 450px; }

        .asset-tag {
           position: absolute; top: 15px; left: 15px; z-index: 20;
           background: rgba(8, 22, 23, 0.8); color: var(--accent-glow);
           font-size: 8px; font-weight: 900; letter-spacing: 2px;
           padding: 5px 10px; border-radius: 2px; border: 1px solid rgba(255,255,255,0.1);
        }

        .gal-img { transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .gallery-item:hover .gal-img { transform: scale(1.05); }

        .gal-label-wrap { display: flex; align-items: center; gap: 20px; margin-top: 25px; }
        .gal-line { height: 1px; width: 30px; background: var(--accent-primary); opacity: 0.3; }
        .gal-label { 
           font-family: var(--font-inter); font-size: 10px; font-weight: 800;
           letter-spacing: 0.3em; color: var(--text-primary); text-transform: uppercase;
           opacity: 0.5; transition: opacity 0.3s;
        }
        .gallery-item:hover .gal-label { opacity: 1; }
        .gal-label :global(span) { font-family: var(--font-playfair); font-style: italic; color: var(--accent-primary); text-transform: none; font-size: 1.1rem; letter-spacing: normal; }

        @media (max-width: 1024px) {
           .title { font-size: 45px; }
           .gallery-grid { grid-template-columns: 1fr; gap: 60px; }
           .gallery-header { flex-direction: column; align-items: flex-start; gap: 30px; }
           .offset-item { margin-top: 0; }
           .h-tall, .h-short { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
