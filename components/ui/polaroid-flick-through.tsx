'use client';

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RefreshCw } from "lucide-react";

// NOTE: The following is a placeholder for the original Button component.
// In a real app, you would use your existing UI library.
const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Seeded pseudo-random number generator
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}

export interface ImageData {
  src: string;
  alt: string;
  id: string;
  desc?: string;
}

interface ScatterPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

interface ImageStackProps {
  images?: ImageData[];
  maxRotation?: number;
  scatterRadius?: number;
  seed?: number;
  className?: string;
  onReshuffle?: () => void;
}

interface ImageStackRef {
  reshuffle: () => void;
}

// Framer Motion variants for container and cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0, // No initial pause, start staggering immediately
      staggerChildren: 1.5, // Reverted to the original 1.5-second stagger
    },
  },
};

const cardVariants = {
  hidden: (custom: { zIndex: number }) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    zIndex: custom.zIndex,
  }),
  visible: (custom: {
    position: ScatterPosition;
    zIndex: number;
    springConfig: any;
  }) => ({
    x: custom.position.x,
    y: custom.position.y,
    rotate: custom.position.rotation,
    scale: custom.position.scale,
    zIndex: custom.zIndex,
    transition: custom.springConfig,
  }),
};

export const ImageStack = React.forwardRef<ImageStackRef, ImageStackProps>(
  (
    {
      images = [],
      maxRotation = 15,
      scatterRadius = 40, // Reduced radius for a tighter stack
      seed = 12345,
      className = "",
      onReshuffle,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [imagesLoaded, setImagesLoaded] = React.useState(false);
    const [scatterPositions, setScatterPositions] = React.useState<
      ScatterPosition[]
    >([]);
    const [currentSeed, setCurrentSeed] = React.useState(seed);
    const [loadedImages, setLoadedImages] = React.useState<Set<string>>(
      new Set()
    );

    const containerRef = React.useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    // Generate scatter positions to the left/right of the center
    const generateScatterPositions = React.useCallback(
      (seedValue: number) => {
        const rng = new SeededRandom(seedValue);
        return images.map(() => ({
          x: rng.range(-scatterRadius, scatterRadius), 
          y: rng.range(-scatterRadius, scatterRadius),
          rotation: rng.range(-maxRotation, maxRotation),
          scale: rng.range(0.95, 1.05),
        }));
      },
      [images, scatterRadius, maxRotation]
    );

    // Preload images
    React.useEffect(() => {
      if (!images.length) return;
      const preloadImages = async () => {
        const loadPromises = images.map((image) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedImages((prev) => new Set(prev).add(image.id));
              resolve(image.id);
            };
            img.onerror = () => {
              console.warn(`Failed to load image: ${image.id}`);
              reject(new Error(`Failed to load image: ${image.id}`));
            };
            img.src = image.src;
          });
        });

        try {
          await Promise.all(loadPromises);
          setImagesLoaded(true);
        } catch (error) {
          console.error("Error preloading images:", error);
          setImagesLoaded(true); // Continue anyway
        }
      };

      preloadImages();
    }, [images]);

    // Generate initial positions
    React.useEffect(() => {
      setScatterPositions(generateScatterPositions(currentSeed));
    }, [currentSeed, generateScatterPositions]);

    // Intersection observer
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && imagesLoaded) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [imagesLoaded]);

    // Reshuffle function
    const reshuffle = React.useCallback(() => {
      const newSeed = Math.floor(Math.random() * 1000000);
      setCurrentSeed(newSeed);
      setIsVisible(false);

      setTimeout(() => {
        setIsVisible(true);
      }, 100);

      onReshuffle?.();
    }, [onReshuffle]);

    // Expose reshuffle via ref
    React.useImperativeHandle(
      ref,
      () => ({
        reshuffle,
      }),
      [reshuffle]
    );

    const springConfig = prefersReducedMotion
      ? { type: "tween", duration: 0.3 }
      : { type: "spring", stiffness: 100, damping: 20 };

    return (
      <div
        className={`relative w-full h-[600px] flex items-center justify-center overflow-visible ${className}`}
      >
        <motion.div
          ref={containerRef}
          className="relative w-full h-full" 
          style={{ perspective: "1000px" }}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500 font-inter text-[8px] font-black tracking-[4px] uppercase opacity-20">ARCHIVE LOAD...</div>
            </div>
          )}

          {images.map((image, index) => {
            const position = scatterPositions[index];
            if (!position) return null;

            return (
              <motion.div
                key={`${image.id}-${currentSeed}`}
                className="absolute"
                variants={cardVariants}
                custom={{
                  position: position,
                  zIndex: images.length - index,
                  springConfig: springConfig,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  marginLeft: "-180px",
                  marginTop: "-150px",
                }}
              >
                <a href="#enquire" className="block text-decoration-none group">
                  <div className="bg-white p-3 shadow-2xl border border-gray-100 rounded-sm transition-all duration-300 group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.1)]">
                    <div className="relative w-[360px] h-[240px] overflow-hidden rounded-sm bg-gray-50">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='240'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3EImage not found%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div className="mt-3 font-inter text-[8px] font-black tracking-[5px] text-gray-800 text-center uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                      {image.alt}
                    </div>
                    {image.desc && (
                      <p className="mt-2 font-inter text-[7px] text-gray-400 text-center leading-relaxed max-w-[280px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {image.desc}
                      </p>
                    )}
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }
);
ImageStack.displayName = "ImageStack";
