"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo, AnimatePresence } from "framer-motion"
import Image from "next/image"

export interface StackImage {
  id: number | string
  src: string
  alt: string
  title?: string
  desc?: string
}

interface VerticalImageStackProps {
  images: StackImage[]
  className?: string
}

export function VerticalImageStack({ images, className }: VerticalImageStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400 // ms between navigations

  const navigate = useCallback((newDirection: number) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }, [images.length])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.y < -threshold) {
      navigate(1)
    } else if (info.offset.y > threshold) {
      navigate(-1)
    }
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Only handle wheel if the component is in view (or just let it scroll normally if not)
      // For a landing page, we usually want subtle wheel navigation or just drag
      if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      }
    },
    [navigate],
  )

  // Disabling wheel for now to prevent hijacking page scroll
  /*
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [handleWheel])
  */

  const getCardStyle = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 10, rotateX: 0 }
    } else if (diff === -1) {
      return { y: -120, scale: 0.85, opacity: 0.7, zIndex: 5, rotateX: 10 }
    } else if (diff === -2) {
      return { y: -220, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: 20 }
    } else if (diff === 1) {
      return { y: 120, scale: 0.85, opacity: 0.7, zIndex: 5, rotateX: -10 }
    } else if (diff === 2) {
      return { y: 220, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: -20 }
    } else {
      return { y: diff > 0 ? 350 : -350, scale: 0.6, opacity: 0, zIndex: 0, rotateX: diff > 0 ? -30 : 30 }
    }
  }

  const isVisible = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return Math.abs(diff) <= 2
  }

  const currentImage = images[currentIndex]

  // Smaller card dimensions for amenities
  const cardWidth = 240 
  const cardHeight = 320

  return (
    <div className={`relative flex h-[700px] w-full items-center justify-center overflow-visible bg-transparent ${className}`}>
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Card Stack */}
      <div className="relative flex h-[500px] w-full items-center justify-center" style={{ perspective: "1500px" }}>
        {images.map((image, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={image.id}
              className={`absolute cursor-pointer ${isCurrent ? 'cursor-grab active:cursor-grabbing' : ''}`}
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
              }}
              drag={isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
              <a href="#enquire" className="block text-decoration-none focus:outline-none">
                <div
                  className={`relative overflow-hidden rounded-2xl bg-white transition-shadow duration-500 ${
                    isCurrent ? 'shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5' : 'shadow-lg ring-1 ring-black/5'
                  }`}
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent pointer-events-none" />
                  
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Caption on the card */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                     <p className="font-inter text-[8px] font-black tracking-[3px] text-white/50 uppercase mb-1">AMENITY ARCHIVE</p>
                     <h4 className="font-playfair text-lg text-white font-medium italic">{image.alt}</h4>
                  </div>
                </div>
              </a>
            </motion.div>
          )
        })}
      </div>

      {/* Info Display (Right of the stack) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 pr-12 hidden lg:flex flex-col gap-6 select-none">
         <AnimatePresence mode="wait">
           <motion.div
             key={currentIndex}
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -20 }}
             transition={{ duration: 0.4, ease: "easeOut" }}
             className="flex flex-col gap-3"
           >
             <span className="font-inter text-[10px] font-black tracking-[6px] text-cyan-600 uppercase">SIGNATURE 0{currentIndex + 1}</span>
             <h3 className="font-playfair text-3xl text-gray-900 font-light leading-tight">
               {currentImage.title?.replace('<span>', '').replace('</span>', '') || currentImage.alt}
             </h3>
             <p className="font-inter text-xs text-gray-500 leading-relaxed max-w-[240px]">
               {currentImage.desc}
             </p>
             
             <a href="#enquire" className="mt-4 flex items-center gap-3 group">
                <span className="font-inter text-[9px] font-bold tracking-[3px] text-gray-900 group-hover:text-cyan-600 transition-colors uppercase">Secure Access</span>
                <div className="h-px w-8 bg-gray-300 group-hover:w-12 group-hover:bg-cyan-600 transition-all duration-500" />
             </a>
           </motion.div>
         </AnimatePresence>
      </div>

      {/* Navigation Indicators (Left) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <span className="text-4xl font-light text-gray-900 tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="h-[2px] w-6 bg-cyan-500/30" />
          <span className="text-[10px] font-bold text-gray-400 tabular-nums uppercase tracking-widest">{String(images.length).padStart(2, "0")}</span>
        </div>

        <div className="flex flex-col gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative h-8 w-1 flex items-center`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-full w-full rounded-full transition-all duration-500 ${
                index === currentIndex ? "bg-cyan-600 h-10 w-[2px]" : "bg-gray-200 hover:bg-gray-400"
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
