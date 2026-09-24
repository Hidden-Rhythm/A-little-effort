'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroProps {
  onOpenGift: () => void;
  isGiftOpened: boolean;
}

export default function Hero({ onOpenGift, isGiftOpened }: HeroProps) {
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  if (isGiftOpened) return null;

  return (
    <div className="app relative w-full min-h-screen overflow-hidden font-display">
      {/* Dreamy background */}
      <div className="dreamy-bg" />

      {/* Floating particles */}
      <div className="floating-particles" aria-hidden="true">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Background icons */}
      <div className="bg-icons" aria-hidden="true">
        {/* Star 1 */}
        <svg
          className="icon icon-star icon-1"
          viewBox="0 0 24 24"
          fill="#FFF7A1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l2.39 4.84L19 8.1l-3.5 3.41.82 5.04L12 15.77 7.68 16.55l.82-5.04L5 8.1l4.61-1.26L12 2z" />
        </svg>

        {/* Cloud */}
        <svg
          className="icon icon-cloud icon-2"
          viewBox="0 0 24 24"
          fill="#B0E0E6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.5 12c1.38 0 2.5 1.12 2.5 2.5S19.88 17 18.5 17H6.5C4.57 17 3 15.43 3 13.5S4.57 10 6.5 10c.28 0 .5-.22.5-.5C7 6.36 9.36 4 12.5 4S18 6.36 18 9.5c0 .28.22.5.5.5z" />
        </svg>

        {/* Sparkle */}
        <svg
          className="icon icon-sparkle icon-3"
          viewBox="0 0 24 24"
          fill="#FFD1DC"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l1.5 3.5L17 7l-3.5 1L12 12l-1.5-4L7 7l3.5-1L12 2z" />
        </svg>

        {/* Star 4 */}
        <svg
          className="icon icon-star icon-4"
          viewBox="0 0 24 24"
          fill="#CDB4DB"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l2.39 4.84L19 8.1l-3.5 3.41.82 5.04L12 15.77 7.68 16.55l.82-5.04L5 8.1l4.61-1.26L12 2z" />
        </svg>

        <div className="heart-1">💕</div>
        <div className="heart-2">💖</div>
        <div className="sparkle-text-1">✨</div>
        <div className="sparkle-text-2">🌸</div>
      </div>

      {/* Main content */}
      <div className="page-container relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10">
        {/* Decorative floating elements */}
        <svg
          className="absolute top-10 left-10 w-12 h-12 animate-float-slow"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2l2.39 4.84L19 8.1l-3.5 3.41.82 5.04L12 15.77 7.68 16.55l.82-5.04L5 8.1l4.61-1.26L12 2z"
            fill="#FFF7A1"
          />
        </svg>

        <svg
          className="absolute right-12 top-16 w-16 h-16 opacity-80 animate-float"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 17.58A4.42 4.42 0 0115.58 22H7.42A4.42 4.42 0 013 17.58 4.5 4.5 0 017.5 13H8a5 5 0 019.9-1.2A3.5 3.5 0 0120 17.58z"
            fill="#B0E0E6"
          />
        </svg>

        <svg
          className="absolute left-12 bottom-20 w-10 h-10 animate-float-slow"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21s-6-4.35-8.5-6.5C1.85 12.73 3 9 6 8c2.28-.75 3.5 1 6 1s3.72-1.75 6-1c3 1 4.15 4.73 2.5 6.5C18 16.65 12 21 12 21z"
            fill="#FFD1DC"
          />
        </svg>

        {/* Main card */}
        <motion.div
          className="relative w-full max-w-2xl bg-[#FFF8E7] rounded-2xl shadow-lg border border-pink-200 p-6 sm:p-8 md:p-10 z-10 animate-fadeIn mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated GIF */}
          <div className="absolute -top-10 right-6 w-20 h-20 sm:w-24 sm:h-24 object-contain animate-bounce-slow">
            <Image
              src="/assets/intro-DzUiguR4.webp"
              alt="Decorative birthday animation"
              width={96}
              height={96}
              className="w-full h-full object-contain"
              priority
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>

          {/* Window controls */}
          <div className="flex items-center justify-between border-b border-pink-200 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff9ec7] border border-[#f081a9]"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#fff07a] border border-[#f0cf52]"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#b1f2b1] border border-[#92d992]"></span>
            </div>
            <p className="text-sm font-bold text-[#9a4c73] flex items-center gap-1">
              A Note for You
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-6-4.35-8.5-6.5C1.85 12.73 3 9 6 8c2.28-.75 3.5 1 6 1s3.72-1.75 6-1c3 1 4.15 4.73 2.5 6.5C18 16.65 12 21 12 21z"
                  fill="#f04299"
                />
              </svg>
            </p>
            <div className="w-16"></div>
          </div>

          {/* Content */}
          <div className="text-center space-y-6 relative">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b0d14] leading-snug"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hey Princess! 💕
            </motion.h1>

            <motion.div
              className="text-[#1b0d14]/80 text-base md:text-lg leading-relaxed relative mx-auto max-w-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                I Wanted to do something special for you, for this birthday,
                so I made something special just for you...
              </p>
              <p className="pt-3">
                <span className="font-semibold text-[#f04299]">
                  Click below to see what it is! ✨
                </span>
                <span className="inline-block w-1.5 h-4 bg-[#f04299]/70 ml-1 animate-cursor"></span>
              </p>
            </motion.div>

            <motion.button
              onClick={onOpenGift}
              className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#f04299] text-white font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95 hover:shadow-pink-300/50 focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open my heart"
            >
              Open My Heart 💖
            </motion.button>

            {/* Decorative element */}
            <div
              className="absolute -bottom-6 -left-4 animate-float-slow opacity-70 pointer-events-none"
              style={{ transform: 'rotate(-15deg)', zIndex: 20 }}
            >
              <Image
                src="/assets/intro-BrJOTFFc.webp"
                alt="Decorative princess illustration"
                width={80}
                height={80}
                className="w-20 h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-xs text-[#9a4c73] text-center">
          Made with love, only for you 💕
        </div>
      </div>
    </div>
  );
}
