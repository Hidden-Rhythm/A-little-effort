'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { messageData } from '@/data/message';
import { showToast } from '@/lib/toast';
import Playlist from '@/components/Playlist';
import FlipCards from '@/components/FlipCards';
import TypewriterText from '@/components/TypewriterText';

interface MessageCardProps {
  isRevealed: boolean;
  onRestart?: () => void;
}

export default function MessageCard({
  isRevealed,
  onRestart,
}: MessageCardProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showFlipCards, setShowFlipCards] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState({
    signature: false,
    love: false,
    stamped: false,
  });
  const [stampText, setStampText] = useState({ love: '', stamped: '' });

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
    // Show letter after envelope opens
    setTimeout(() => {
      setShowLetter(true);
      // Start typewriter effects for stamp text after letter appears
      setTimeout(() => {
        typeText('LOVE', 'love', () =>
          setTypewriterComplete((prev) => ({ ...prev, love: true }))
        );
        setTimeout(() => {
          typeText('STAMPED', 'stamped', () =>
            setTypewriterComplete((prev) => ({ ...prev, stamped: true }))
          );
        }, 800);
      }, 1000);
    }, 400);
  };

  const typeText = (
    fullText: string,
    key: 'love' | 'stamped',
    onComplete: () => void
  ) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setStampText((prev) => ({
          ...prev,
          [key]: fullText.slice(0, currentIndex),
        }));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 100);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageData.body);
      showToast.success(messageData.toast.copied);
    } catch (err) {
      showToast.error(messageData.toast.error);
    }
  };

  if (!isRevealed) return null;

  if (showFlipCards) {
    return <FlipCards onRestart={onRestart} />;
  }

  if (showPlaylist) {
    return <Playlist onContinue={() => setShowFlipCards(true)} />;
  }

  return (
    <div className="page-container font-display relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6">
      {/* Decorative floating elements */}
      <svg
        className="absolute top-10 left-10 w-8 h-8 animate-float-slow"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2l2.39 4.84L19 8.1l-3.5 3.41.82 5.04L12 15.77 7.68 16.55l.82-5.04L5 8.1l4.61-1.26L12 2z"
          fill="#FFF7A1"
        />
      </svg>

      <svg
        className="absolute right-10 top-16 w-10 h-10 opacity-80 animate-float"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 17.58A4.42 4.42 0 0115.58 22H7.42A4.42 4.42 0 013 17.58 4.5 4.5 0 017.5 13H8a5 5 0 019.9-1.2A3.5 3.5 0 0120 17.58z"
          fill="#B0E0E6"
        />
      </svg>

      <svg
        className="absolute left-12 bottom-20 w-6 h-6 animate-float-slow"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 21s-6-4.35-8.5-6.5C1.85 12.73 3 9 6 8c2.28-.75 3.5 1 6 1s3.72-1.75 6-1c3 1 4.15 4.73 2.5 6.5C18 16.65 12 21 12 21z"
          fill="#FFD1DC"
        />
      </svg>

      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-slideDown">
          <div className="text-center">
            <h2 className="text-[#f04299] text-lg sm:text-xl font-bold leading-tight">
              A Love Letter 💌
            </h2>
            <div className="text-xs text-[#9a4c73] mt-1">
              From my heart to yours
            </div>
          </div>
        </div>

        {/* Envelope and Letter Container */}
        <div className="bg-[#FFF8E7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-xl animate-fadeIn overflow-hidden">
          <AnimatePresence mode="wait">
            {!isEnvelopeOpen ? (
              // Closed Envelope
              <motion.div
                key="envelope-closed"
                className="flex flex-col items-center justify-center min-h-[400px] relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div
                  className="relative cursor-pointer transition-all duration-800 transform hover:scale-105 hover:-rotate-1"
                  onClick={handleEnvelopeClick}
                >
                  <div className="relative w-80 h-56 mx-auto">
                    {/* Envelope base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4E6] to-[#FFF0F5] rounded-lg shadow-lg border-2 border-pink-200"></div>

                    {/* Envelope flap (closed) */}
                    <div
                      className="absolute -top-1 left-0 right-0 h-28 bg-gradient-to-br from-[#FFD1DC] to-[#FFC0CB]"
                      style={{
                        clipPath: 'polygon(0px 0px, 100% 0px, 50% 100%)',
                        borderRadius: '8px 8px 0px 0px',
                      }}
                    />

                    {/* Heart seal */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#f04299] rounded-full flex items-center justify-center text-white text-xl shadow-md animate-pulse">
                      💌
                    </div>

                    {/* Decorative hearts */}
                    <div className="absolute -top-2 -right-2 text-pink-300 text-sm animate-bounce-slow">
                      💕
                    </div>
                    <div
                      className="absolute -bottom-2 -left-2 text-pink-300 text-xs animate-bounce-slow"
                      style={{ animationDelay: '0.5s' }}
                    >
                      💖
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <p className="text-sm text-[#9a4c73] mb-2">
                      Click to open the envelope
                    </p>
                    <div className="inline-block px-4 py-2 bg-pink-50 rounded-full text-xs font-medium text-[#f04299] border border-pink-200 animate-pulse">
                      Special Delivery 💌
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Opened Envelope with Letter
              <motion.div
                key="envelope-opened"
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Opened envelope base */}
                {!showLetter && (
                  <motion.div
                    className="relative w-80 h-56 mx-auto mb-6"
                    style={{ perspective: '1000px' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFE4E6] to-[#FFF0F5] rounded-lg shadow-lg border-2 border-pink-200"></div>

                    {/* Envelope flap (opened - flipped back) */}
                    <motion.div
                      className="absolute -top-1 left-0 right-0 h-28 bg-gradient-to-br from-[#FFD1DC] to-[#FFC0CB]"
                      style={{
                        clipPath: 'polygon(0px 0px, 100% 0px, 50% 0px)',
                        borderRadius: '8px 8px 0px 0px',
                        transformOrigin: 'top center',
                        transformStyle: 'preserve-3d',
                      }}
                      initial={{
                        rotateX: 0,
                        y: 0,
                      }}
                      animate={{
                        rotateX: -160,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                )}

                {/* Letter emerging */}
                <AnimatePresence>
                  {showLetter && (
                    <motion.div
                      className="relative w-full"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                        delay: 0.2,
                      }}
                    >
                      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-inner border border-pink-100 relative">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-pink-50 to-transparent rounded-xl"></div>

                        {/* Decorative image top right */}
                        <div
                          className="absolute -top-6 -right-6 animate-float-slow opacity-80 pointer-events-none z-30"
                          style={{ transform: 'rotate(15deg)' }}
                        >
                          <Image
                            src="/assets/letter-C680mUtz.webp"
                            alt="Decorative love letter illustration"
                            width={96}
                            height={96}
                            className="w-24 h-auto object-contain drop-shadow-lg"
                          />
                        </div>

                        {/* Letter content */}
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-center justify-between mb-4 pb-3 border-b border-pink-100 relative">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-[#f04299] flex items-center justify-center text-white text-sm">
                                💝
                              </div>
                              <span className="text-sm font-semibold text-[#9a4c73]">
                                My Sweetest Love
                              </span>
                            </div>
                          </div>

                          {/* Letter body */}
                          <div className="handwriting text-sm sm:text-base leading-relaxed text-[#1b0d14] pb-20 pt-6">
                            <div className="mb-4 text-[#f04299] font-medium">
                              My dearest Dishu,
                            </div>
                            <div
                              className="mb-6 text-justify"
                              style={{ textIndent: '2rem' }}
                            >
                              Every moment with you feels like a beautiful dream
                              that I never want to wake up from. I want you to
                              know that you are the most precious person in my
                              life. Every day with you is a gift, and I&apos;m
                              grateful for every second we share together. You
                              make me want to be the best version of myself.
                            </div>
                            <div className="mt-8 ml-auto w-fit">
                              <div className="font-medium text-[#f04299]">
                                <TypewriterText
                                  text="With all my love, Always yours 💕"
                                  duration={2}
                                  delay={0}
                                  onComplete={() =>
                                    setTypewriterComplete((prev) => ({
                                      ...prev,
                                      signature: true,
                                    }))
                                  }
                                  showCursor={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Heart stamp SVG */}
                        <div className="absolute bottom-4 left-4 transform -rotate-12 animate-float-slow opacity-40">
                          <svg
                            width="120"
                            height="120"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-24 h-24"
                            role="img"
                            aria-label="Heart Stamp"
                          >
                            <defs>
                              <filter
                                id="grain"
                                x="-20%"
                                y="-20%"
                                width="140%"
                                height="140%"
                              >
                                <feTurbulence
                                  type="fractalNoise"
                                  baseFrequency="1"
                                  numOctaves="2"
                                  stitchTiles="stitch"
                                  result="noise"
                                />
                                <feColorMatrix
                                  type="saturate"
                                  values="0"
                                  in="noise"
                                  result="mono"
                                />
                                <feComponentTransfer in="mono" result="grain">
                                  <feFuncA
                                    type="table"
                                    tableValues="0 0 0.15 0.45"
                                  />
                                </feComponentTransfer>
                                <feBlend
                                  in="SourceGraphic"
                                  in2="grain"
                                  mode="multiply"
                                />
                              </filter>
                            </defs>
                            <g
                              fill="#f04299"
                              opacity="0.9"
                              filter="url(#grain)"
                            >
                              <circle cx="188" cy="100" r="3" />
                              <circle
                                cx="185.001472713438"
                                cy="122.77607596902183"
                                r="3"
                              />
                              <circle cx="176.2102355330306" cy="144" r="3" />
                              <circle
                                cx="162.22539674441617"
                                cy="162.22539674441617"
                                r="3"
                              />
                              <circle cx="144" cy="176.21023553303058" r="3" />
                              <circle
                                cx="122.77607596902183"
                                cy="185.001472713438"
                                r="3"
                              />
                              <circle cx="100" cy="188" r="3" />
                              <circle
                                cx="77.22392403097817"
                                cy="185.001472713438"
                                r="3"
                              />
                              <circle
                                cx="56.00000000000002"
                                cy="176.2102355330306"
                                r="3"
                              />
                              <circle
                                cx="37.77460325558383"
                                cy="162.22539674441617"
                                r="3"
                              />
                              <circle cx="23.789764466969388" cy="144" r="3" />
                              <circle
                                cx="14.998527286561995"
                                cy="122.77607596902185"
                                r="3"
                              />
                              <circle cx="12" cy="100.00000000000001" r="3" />
                              <circle
                                cx="14.99852728656198"
                                cy="77.22392403097821"
                                r="3"
                              />
                              <circle
                                cx="23.7897644669694"
                                cy="55.99999999999999"
                                r="3"
                              />
                              <circle
                                cx="37.774603255583806"
                                cy="37.77460325558383"
                                r="3"
                              />
                              <circle
                                cx="55.99999999999996"
                                cy="23.789764466969416"
                                r="3"
                              />
                              <circle
                                cx="77.22392403097818"
                                cy="14.998527286561995"
                                r="3"
                              />
                              <circle cx="99.99999999999999" cy="12" r="3" />
                              <circle
                                cx="122.77607596902179"
                                cy="14.99852728656198"
                                r="3"
                              />
                              <circle cx="144" cy="23.7897644669694" r="3" />
                              <circle
                                cx="162.22539674441617"
                                cy="37.774603255583806"
                                r="3"
                              />
                              <circle
                                cx="176.21023553303058"
                                cy="55.99999999999996"
                                r="3"
                              />
                              <circle
                                cx="185.001472713438"
                                cy="77.22392403097818"
                                r="3"
                              />
                            </g>
                            <circle
                              cx="100"
                              cy="100"
                              r="72"
                              stroke="#f04299"
                              strokeWidth="5"
                              fill="none"
                              opacity="0.95"
                            />
                            <circle
                              cx="100"
                              cy="100"
                              r="55"
                              stroke="#f04299"
                              strokeWidth="2.5"
                              fill="none"
                              opacity="0.8"
                            />
                            <path
                              d="M100 82 C100 68 82 68 82 82 C82 96 100 108 100 108 C100 108 118 96 118 82 C118 68 100 68 100 82 Z"
                              fill="#f04299"
                              stroke="#9e2b3d"
                              strokeWidth="1"
                              opacity="0.95"
                              filter="url(#grain)"
                            />
                            <path
                              id="topArc"
                              d="M50 90 A45 45 0 0 1 150 95"
                              fill="none"
                            />
                            <text
                              fontSize="14"
                              textAnchor="middle"
                              fill="#f04299"
                              style={{
                                fontFamily: 'Montserrat, sans-serif',
                                letterSpacing: '0.2em',
                                fontWeight: 600,
                              }}
                            >
                              <textPath href="#topArc" startOffset="50%">
                                {stampText.love || ''}
                              </textPath>
                            </text>
                            <path
                              id="bottomArc"
                              d="M155 110 A55 50 0 0 1 45 110"
                              fill="none"
                            />
                            <text
                              fontSize="12"
                              textAnchor="middle"
                              fill="#b23a4b"
                              style={{
                                fontFamily: 'Montserrat, sans-serif',
                                letterSpacing: '0.15em',
                                fontWeight: 500,
                              }}
                            >
                              <textPath href="#bottomArc" startOffset="50%">
                                {stampText.stamped || ''}
                              </textPath>
                            </text>
                          </svg>
                        </div>

                        {/* Decorative sparkles */}
                        {typewriterComplete.signature && (
                          <div className="absolute top-4 left-4 text-pink-300 opacity-30 text-xs animate-float-slow">
                            ✨
                          </div>
                        )}
                        <div
                          className="absolute bottom-24 right-4 text-pink-300 opacity-30 text-xs animate-float-slow"
                          style={{ animationDelay: '1s' }}
                        >
                          💕
                        </div>
                      </div>

                      {/* Continue button - only show when all typewriter effects are complete */}
                      {typewriterComplete.signature &&
                        typewriterComplete.love &&
                        typewriterComplete.stamped && (
                          <div className="flex justify-center mt-6 animate-slideUp">
                            <button
                              onClick={() => setShowPlaylist(true)}
                              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#f04299] text-white font-semibold shadow-md transition-all transform hover:scale-105 active:scale-95 hover:shadow-pink-300/50 focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer"
                              aria-label="Continue to see more"
                            >
                              Continue To See More ✨
                            </button>
                          </div>
                        )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
