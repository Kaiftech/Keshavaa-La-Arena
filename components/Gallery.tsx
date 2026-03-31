'use client';

import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/assets/bulding1.png', label: 'THE <span>EXTERIOR</span> DETAIL', size: 'tall', code: 'A.01' },
    { src: '/assets/bulding2.png', label: 'THE <span>PRIVATE</span> ATRIUM', size: 'short', code: 'A.02' },
    { src: '/assets/bulding4.png', label: 'THE <span>RIVIERA</span> HALL', size: 'tall', code: 'A.06' },
  ];

  const amenities = [
    { title: 'Turquoise <span>Infinity</span>', subtitle: 'ROOFTOP POOL', img: '/assets/amenity-pool.png', desc: 'Flowing uninterrupted sunsets over the coastline.' },
    { title: 'River <span>Sanctuary</span>', subtitle: 'PRIVATE DOCK', img: '/assets/amenity-river.png', desc: 'Exclusive access to the serene riverfront.' },
    { title: 'Wellness <span>Spa</span>', subtitle: 'JACUZZI', img: '/assets/amenity-gym.png', desc: 'Sanctuary designed for rejuvenation.' },
    { title: 'Youth <span>Sanctuary</span>', subtitle: 'KIDS PLAY LOUNGE', img: '', desc: 'A sophisticated creative space for independent explorers.' },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Gallery Header */}
        <div className="gallery-header">
           <div className="header-text">
             <span className="eyebrow">VISUAL DISCOVERY</span>
             <h2 className="title">Visual <span>Poetry.</span></h2>
           </div>
           <div className="counter-box">PROJECT ARCHIVES</div>
        </div>

        {/* Masonry-Style Gallery */}
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              <div className="img-wrapper">
                <div className="asset-tag">{img.code}</div>
                <Image 
                  src={img.src} 
                  alt="Gallery" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="gal-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="gal-label-wrap">
                 <div className="gal-line" />
                 <span className="gal-label" dangerouslySetInnerHTML={{ __html: img.label }}></span>
              </div>
            </div>
          ))}
        </div>

        {/* Unified Amenities Section */}
        <div id="amenities" className="amenities-divider">
            <span className="divider-text">SIGNATURE LUXURY</span>
            <div className="divider-line" />
        </div>

        <div className="amenities-row">
           {amenities.map((item, i) => (
             <div key={i} className="amenity-simple-card">
               <div className="amenity-visual">
                  {item.img && (
                    <Image 
                      src={item.img} 
                      alt={item.subtitle} 
                      fill 
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  )}
               </div>
               <div className="amenity-info">
                  <span className="amenity-sub">{item.subtitle}</span>
                  <h3 className="amenity-title" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                  <p className="amenity-desc">{item.desc}</p>
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
           display: grid; grid-template-columns: repeat(3, 1fr);
           gap: 40px; align-items: start;
        }

        .offset-item { margin-top: 100px; }

        .amenities-divider { display: flex; align-items: center; gap: 30px; margin: 120px 0 60px; }
        .divider-text { 
           font-family: var(--font-inter); font-size: 11px; font-weight: 800; 
           letter-spacing: 0.8em; color: var(--accent-primary); 
        }
        .divider-line { flex: 1; height: 1px; background: var(--border-subtle); }

        .amenities-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        
        .amenity-simple-card { background: #fafafa; border: 1px solid var(--border-subtle); border-radius: 4px; overflow: hidden; height: 100%; display: flex; flex-direction: column; }
        .amenity-visual { 
           position: relative; width: 100%; height: 200px; 
           background: linear-gradient(135deg, #f8fcfc 0%, #f0fafa 100%);
           background-image: 
             radial-gradient(var(--accent-primary) 0.5px, transparent 0.5px),
             radial-gradient(var(--accent-primary) 0.5px, #f8fcfc 0.5px);
           background-size: 20px 20px;
           background-position: 0 0, 10px 10px;
           opacity: 0.6;
        }
        .amenity-info { padding: 25px; flex-grow: 1; }
        .amenity-sub { 
           display: block; font-family: var(--font-inter); font-size: 8px; font-weight: 900; 
           letter-spacing: 0.3em; color: var(--accent-primary); margin-bottom: 10px; 
        }
        .amenity-title { 
           font-family: var(--font-playfair); font-size: 20px; color: var(--text-primary); 
           margin-bottom: 12px; font-style: normal; line-height: 1.2;
        }
        .amenity-title :global(span) { font-style: italic; color: var(--accent-primary); }
        .amenity-desc { font-size: 12px; color: var(--text-secondary); line-height: 1.6; opacity: 0.7; }

        .img-wrapper {
           position: relative; width: 100%; height: 250px; overflow: hidden;
           border: 1px solid var(--border-subtle); border-radius: 4px;
        }

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
           .gallery-grid { grid-template-columns: 1fr; gap: 40px; }
           .gallery-header { flex-direction: column; align-items: flex-start; gap: 30px; }
           .amenities-row { grid-template-columns: repeat(2, 1fr); }
           .img-wrapper { height: 300px; }
           .amenities-divider { margin: 60px 0 40px; }
        }
        @media (max-width: 768px) {
           .amenities-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
