'use client';

import React from 'react';

interface GalleryAmenitiesProps {
  onOpenModal: () => void;
}

export default function GalleryAmenities({ onOpenModal }: GalleryAmenitiesProps) {
  const images = [
    { src: '/ASSESTS/exterior_luxury.png', alt: 'La Arena Grand Exterior' },
    { src: '/ASSESTS/pool_luxury.png', alt: 'Rooftop Infinity Pool' },
    { src: '/ASSESTS/gym_luxury.png', alt: 'Premium Fitness Centre' },
    { src: '/ASSESTS/jacuzzi_luxury.png', alt: 'Private Balcony Jacuzzi' }
  ];

  return (
    <section className="gallery-amenities">
      <div className="container">
        <div className="section-header">
           <span className="subtitle">Coastal Curations</span>
           <h2>La Arena Experience</h2>
        </div>
        <div className="masonry-grid">
          {/* Item 1: Exterior Large */}
          <div className="grid-item img-box tall" onClick={onOpenModal}>
            <img src={images[0].src} alt={images[0].alt} loading="lazy" />
            <div className="img-overlay">
              <span>Grand Facade</span>
            </div>
          </div>
          
          {/* Item 2: Pool */}
          <div className="grid-item img-box" onClick={onOpenModal}>
            <img src={images[1].src} alt={images[1].alt} loading="lazy" />
            <div className="img-overlay">
              <span>Infinity Views</span>
            </div>
          </div>

          {/* Item 3: Jacuzzi */}
          <div className="grid-item img-box tall" onClick={onOpenModal}>
            <img src={images[3].src} alt={images[3].alt} loading="lazy" />
            <div className="img-overlay">
              <span>Signature Bliss</span>
            </div>
          </div>

          {/* Item 4: Gym */}
          <div className="grid-item img-box" onClick={onOpenModal}>
            <img src={images[2].src} alt={images[2].alt} loading="lazy" />
            <div className="img-overlay">
              <span>Wellness Hub</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-amenities {
          background: var(--base-beige);
          padding: 120px 0;
        }
        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .subtitle {
          display: block;
          color: var(--bright-aqua);
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 0.8rem;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .gallery-amenities h2 {
          color: var(--dark-slate);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-family: var(--serif-font);
        }
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-auto-rows: 320px;
          gap: 30px;
        }
        .grid-item {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }
        .grid-item.tall {
          grid-row: span 2;
        }
        .grid-item.img-box {
          cursor: pointer;
        }
        .grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(30, 41, 59, 0.6), transparent);
          display: flex;
          align-items: flex-end;
          padding: 24px;
          opacity: 0;
          transition: var(--transition);
        }
        .img-overlay span {
          color: var(--white);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
        }
        .grid-item.img-box:hover img {
          transform: scale(1.1);
        }
        .grid-item.img-box:hover .img-overlay {
          opacity: 1;
        }
        @media (max-width: 1100px) {
          .masonry-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .masonry-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
          .grid-item { height: 350px; }
          .grid-item.tall { grid-row: auto; }
        }
      `}</style>
    </section>
  );
}
