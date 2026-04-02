'use client';

import React from 'react';
import { ImageAutoSlider } from "./ui/image-auto-slider";

const Gallery = () => {
   const allImages = [
      "/assets/bulding1.png",
      "/assets/1s.jpg",
      "/assets/bulding2.png",
      "/assets/2s.jpg",
      "/assets/bulding3.png",
      "/assets/3s.jpg",
      "/assets/bulding4.png",
      "/assets/4s.jpg",
      "/assets/bulding5.png",
      "/assets/5s.jpg",
      "/assests/6s.jpg"
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

            {/* Primary Project Discovery Slider (Upscaled 900x600) */}
            <div className="gallery-slider-wrap">
               <ImageAutoSlider images={allImages} />
            </div>
         </div>

         <style jsx>{`
        .gallery-section {
           background: #ffffff;
           padding: 60px 0;
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
        .gallery-slider-wrap { margin-bottom: 0; }
        @media (max-width: 1024px) {
           .title { font-size: 45px; }
        }
        @media (max-width: 768px) {
           .gallery-header { flex-direction: column; align-items: flex-start; gap: 30px; }
           .gallery-section { padding: 40px 0; }
        }
      `}</style>
      </section>
   );
};

export default Gallery;
