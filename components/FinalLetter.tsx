'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SealedLetter from './SealedLetter';

interface FinalLetterProps {
  onRestart?: () => void;
}

interface KissParticle {
  id: number;
  x: number;
  driftX: number;
  rotation: number;
}

export default function FinalLetter({ onRestart }: FinalLetterProps) {
  const [isSealed, setIsSealed] = useState(false);
  const [showSealedPage, setShowSealedPage] = useState(false);
  const [kissParticles, setKissParticles] = useState<KissParticle[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSeal = () => {
    if (isSealed) return;

    const particles: KissParticle[] = [];
    for (let i = 0; i < 12; i++) {
      particles.push({
        id: Date.now() + i,
        x: 50 + (Math.random() - 0.5) * 20,
        driftX: (Math.random() - 0.5) * 40,
        rotation: Math.random() * 360,
      });
    }
    setKissParticles(particles);

    setIsSealed(true);

    setTimeout(() => {
      setKissParticles([]);
      setShowSealedPage(true);
    }, 1600);
  };

  if (showSealedPage) {
    return <SealedLetter onExperienceAgain={onRestart} />;
  }

  return (
    <div className="page-container">
      <div className="font-display min-h-screen flex items-center justify-center py-10 px-4 bg-[#FFF4F8] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 grid-paper"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star absolute left-8 top-14 text-[#FFF7A1] opacity-70 w-5 h-5 animate-float-slow"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star absolute right-8 top-28 text-[#CDB4DB] opacity-60 w-4 h-4 animate-float-rev"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-heart absolute left-6 bottom-28 text-[#FFD1DC] opacity-30 w-6 h-6 animate-pulse-tiny"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail absolute right-6 bottom-20 text-[#B0E0E6] opacity-30 w-6 h-6 animate-float-slow"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>

        <div className="pointer-events-none fixed inset-0 z-40"></div>

        <div className="relative z-10 w-full max-w-2xl transition-all duration-600 opacity-100 translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF8E7] rounded-3xl p-6 sm:p-8 shadow-xl border border-pink-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f04299] flex items-center justify-center text-white shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1b0d14]">
                  Final Love Letter
                </h3>
              </div>
            </div>

            <article className="handwriting text-sm sm:text-base text-[#1b0d14] leading-relaxed space-y-4">
              <p className="text-[#f04299] font-semibold">
                My sweetest Cutiepie,
              </p>
              <p>
                You&apos;re the calm I reach for and the laugh that brightens my
                day.
              </p>
              <p className="text-[#5a9bb8]">
                I hope this tiny world made you smile and whispered how much
                you mean to me.
              </p>
              <p>
                I&apos;ll keep making memories, big and small, always with you.
              </p>
              <p className="text-[#a67fb8]">
                Forever yours, in every little universe.
              </p>
            </article>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3 items-center">
              <div className="text-xs text-[#9a4c73]">
                Sealing will finish the experience.
              </div>
              <div className="flex gap-3 relative">
                <AnimatePresence>
                  {kissParticles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="kiss-particle"
                      style={
                        {
                          left: `${particle.x}%`,
                          '--driftX': `${particle.driftX}px`,
                          '--rot': `${particle.rotation}deg`,
                        } as React.CSSProperties
                      }
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="text-2xl">💋</span>
                      <div className="sparkle"></div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button
                  ref={buttonRef}
                  onClick={handleSeal}
                  disabled={isSealed}
                  className="rounded-full bg-gradient-to-r from-[#ff9aa8] to-[#ffd1dc] px-5 py-2.5 text-sm sm:text-base font-bold shadow-md hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSealed ? 'Sealed 💌' : 'Seal this Letter 💌'}
                </button>
                {onRestart && (
                  <button
                    onClick={onRestart}
                    className="rounded-full bg-[#9be7c4] px-4 py-2.5 text-sm sm:text-base font-medium shadow-md hover:brightness-95 transition cursor-pointer"
                  >
                    Restart
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
