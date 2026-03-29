'use client';

import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    '/assets/bulding1.png',
    '/assets/bulding2.png',
    '/assets/bulding3.png',
    '/assets/bulding4.png',
    '/assets/bulding5.png'
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="title-underline">Project Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, i) => (
            <div key={i} className={`gallery-item hover-zoom animate-fade-up item-${i + 1}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <Image 
                src={src} 
                alt={`Building ${i + 1}`} 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery-section {
          background: var(--bg-alt);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(3, clamp(250px, 30vh, 400px));
          gap: 20px;
          margin-top: 50px;
        }

        .gallery-item {
          position: relative;
          border-radius: var(--radius-squircle, 32px);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: 100%;
        }

        .item-1 { grid-column: span 3; grid-row: span 2; }
        .item-2 { grid-column: span 3; }
        .item-3 { grid-column: span 3; }
        .item-4 { grid-column: span 3; }
        .item-5 { grid-column: span 3; }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          
          .gallery-item {
            height: 300px;
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
