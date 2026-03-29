'use client';

import React from 'react';
import Image from 'next/image';

const Amenities = () => {
  const amenities = [
    { title: 'River Facing', image: '/assets/amenity-river.png', desc: 'Serene views of the Nerul river' },
    { title: 'Rooftop Infinity Pool', image: '/assets/amenity-pool.png', desc: 'Panoramic sky-high relaxation' },
    { title: 'Fitness Centre', image: '/assets/amenity-gym.png', desc: 'State-of-the-art wellness facility' },
    { title: 'Kids\' Play Lounge', image: '/assets/amenity-kids.png', desc: 'Secure and world-class play area' },
    { title: 'Jacuzzi Spa', image: '/assets/amenity-jacuzzi.png', desc: 'Private bubbles of luxury' },
    { title: 'Dedicated Parking', image: '/assets/amenity-parking.png', desc: 'Ample secure parking space' },
    { title: '24/7 Security', image: '/assets/amenity-security.png', desc: 'Smart AI-driven security systems' }
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        <h2 className="title-underline">Modern Amenities</h2>
        <div className="amenities-grid">
          {amenities.map((amenity, i) => (
            <article key={i} className="amenity-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="amenity-image">
                <Image 
                  src={amenity.image} 
                  alt={`${amenity.title} - Luxury Amenity at La Arena Nerul`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="amenity-info">
                <h4 className="font-luxury">{amenity.title}</h4>
                <p>{amenity.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .amenities-section {
          background: #ffffff;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .amenity-card {
          background: #fff;
          border-radius: var(--radius-squircle, 32px);
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          transition: var(--transition-smooth);
        }

        .amenity-card:hover {
          transform: translateY(-10px);
          border-bottom-color: var(--primary);
        }

        .amenity-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .amenity-image :global(img) {
          transition: transform 0.6s ease;
        }

        .amenity-card:hover .amenity-image :global(img) {
          transform: scale(1.1);
        }

        .amenity-info {
          padding: 30px;
        }

        h4 {
          font-size: 1.3rem;
          color: var(--secondary);
          margin-bottom: 8px;
        }

        p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .amenities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Amenities;
