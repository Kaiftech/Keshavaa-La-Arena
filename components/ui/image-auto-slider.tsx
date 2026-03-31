'use client';

import React from 'react';

interface ImageAutoSliderProps {
  images?: string[];
}

export const ImageAutoSlider = ({ 
  images = [
    "/assets/bulding1.png",
    "/assets/bulding2.png",
    "/assets/bulding3.png",
    "/assets/bulding4.png",
    "/assets/bulding5.png",
    "/assets/amenity-pool.png",
    "/assets/amenity-river.png",
    "/assets/amenity-gym.png",
    "/assets/amenity-kids.png",
    "/assets/amenity-parking.png"
  ]
}: ImageAutoSliderProps) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: scroll-right 100s linear infinite;
        }

        .scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .image-item {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease;
          flex-shrink: 0;
          height: 600px;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          display: block;
        }

        .image-item:hover {
          transform: scale(1.02);
          filter: brightness(1.02);
        }

        @media (max-width: 1024px) {
          .image-item { height: 466px; }
        }

        @media (max-width: 768px) {
          .image-item { height: 266px; }
          .infinite-scroll { gap: 15px; }
        }
      `}</style>
      
      <div className="w-full relative py-4">
        <div className="scroll-container">
          <div className="infinite-scroll">
            {duplicatedImages.map((image, index) => (
              <a
                href="#enquire"
                key={index}
                className="image-item shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Gallery Detail ${(index % images.length) + 1}`}
                  style={{ height: '100%', width: 'auto', display: 'block' }}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
