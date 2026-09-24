'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import FinalLetter from './FinalLetter';

interface FlipCardsProps {
  onRestart?: () => void;
}

interface Card {
  id: number;
  image: string;
  message: string;
  gradient: string;
  delay: number;
}

const cards: Card[] = [
  {
    id: 1,
    image: '/assets/pic1.png',
    message: 'I Love u Dishu 💕',
    gradient: 'from-pink-200 to-purple-200',
    delay: 0,
  },
  {
    id: 2,
    image: '/assets/pic2.png',
    message:
      "You don't even have to try, everytime when I talk to you it just feel so better  ✨",
    gradient: 'from-blue-200 to-teal-200',
    delay: 0.2,
  },
  {
    id: 3,
    image: '/assets/pic3.png',
    message:
      "The little things you do, your expressions, your laughter, the way you talk, your cuteness, they've all become my favorite details. 🌸",
    gradient: 'from-yellow-200 to-orange-200',
    delay: 0.4,
  },
];

export default function FlipCards({ onRestart }: FlipCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [showFinalLetter, setShowFinalLetter] = useState(false);

  const handleCardClick = (cardId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    if (flippedCards.size === cards.length) {
      // Add delay to allow user to see the back of the last card
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3500); // 1.5 second delay

      return () => clearTimeout(timer);
    }
  }, [flippedCards.size]);

  const progress = (flippedCards.size / cards.length) * 100;

  const handleOpenFinalLetter = () => {
    setShowModal(false);
    setShowFinalLetter(true);
  };

  const handleStayHere = () => {
    setShowModal(false);
  };

  if (showFinalLetter) {
    return <FinalLetter onRestart={onRestart} />;
  }

  return (
    <div className="page-container font-display relative min-h-screen flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-4">
      {/* Decorative floating elements */}
      <svg
        className="absolute top-8 sm:top-12 left-4 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 animate-float-slow"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2l2.39 4.84L19 8.1l-3.5 3.41.82 5.04L12 15.77 7.68 16.55l.82-5.04L5 8.1l4.61-1.26L12 2z"
          fill="#FFF7A1"
        />
      </svg>

      <svg
        className="absolute right-4 sm:right-8 top-10 sm:top-14 w-8 sm:w-10 h-8 sm:h-10 opacity-80 animate-float"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 17.58A4.42 4.42 0 0115.58 22H7.42A4.42 4.42 0 013 17.58 4.5 4.5 0 017.5 13H8a5 5 0 019.9-1.2A3.5 3.5 0 0120 17.58z"
          fill="#B0E0E6"
        />
      </svg>

      <svg
        className="absolute left-6 sm:left-12 bottom-16 sm:bottom-20 w-5 sm:w-6 h-5 sm:h-6 animate-float-slow"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 21s-6-4.35-8.5-6.5C1.85 12.73 3 9 6 8c2.28-.75 3.5 1 6 1s3.72-1.75 6-1c3 1 4.15 4.73 2.5 6.5C18 16.65 12 21 12 21z"
          fill="#FFD1DC"
        />
      </svg>

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 animate-slideDown">
          <div className="text-center">
            <h2 className="text-[#f04299] text-base sm:text-xl font-bold leading-tight">
              Some Special Cards For You
            </h2>
            <div className="text-xs text-[#9a4c73] mt-0.5">
              Click each card to reveal a special message!
            </div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="bg-[#FFF8E7] rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 border border-pink-200 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {cards.map((card) => {
              const isFlipped = flippedCards.has(card.id);
              return (
                <div
                  key={card.id}
                  className="relative h-44 sm:h-48 md:h-52 cursor-pointer perspective-1000 group animate-slideUp"
                  style={{ animationDelay: `${card.delay}s` }}
                  onClick={() => handleCardClick(card.id)}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 preserve-3d"
                    style={{
                      transform: isFlipped
                        ? 'rotateY(180deg)'
                        : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front of card */}
                    <div className="absolute w-full h-full rounded-lg border-2 border-white shadow-lg backface-hidden overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <div className="relative w-full h-full">
                        <Image
                          src={card.image}
                          alt={`Memory card ${card.id} - ${card.message.substring(0, 30)}...`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 33vw"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-25`}
                        />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="px-2 py-1 bg-white/95 rounded-full text-xs font-medium text-[#9a4c73] border border-pink-100 shadow-lg backdrop-blur-sm animate-pulse">
                            ✨ Tap!
                          </div>
                        </div>
                        <div className="absolute top-1.5 right-1.5 w-3 h-3 animate-sparkle text-xs">
                          ✨
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute w-full h-full bg-white rounded-lg border-2 border-pink-200 shadow-lg rotate-y-180 backface-hidden p-3 sm:p-4 flex flex-col justify-center">
                      <div className="text-center space-y-2 h-full flex flex-col justify-center">
                        <div className="flex-1 flex items-center justify-center">
                          <div className="text-xs sm:text-sm leading-relaxed text-[#1b0d14] px-1 overflow-y-auto max-h-full">
                            {card.message}
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="px-2 py-1 bg-pink-50 rounded-full text-xs font-medium text-[#9a4c73] border border-pink-100 inline-block hover:bg-pink-100 transition-colors cursor-pointer">
                            Tap to flip back
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Section */}
          <div className="text-center py-2 sm:py-3">
            <div className="text-xs sm:text-sm text-[#9a4c73] font-medium">
              Start by tapping any card above ✨
            </div>
            <div className="mt-2 w-full max-w-xs mx-auto bg-pink-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#f04299] to-pink-400 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-5 sm:p-6 max-w-sm w-full mx-4 shadow-2xl animate-popUp border-2 border-pink-200">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl animate-bounce">🎉</div>
              <h3 className="text-lg sm:text-xl font-bold text-[#f04299]">
                All Messages Unlocked!
              </h3>
              <p className="text-sm text-[#9a4c73] leading-relaxed">
                Each message is a piece of my heart that belongs to you forever.
                ✨
              </p>
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={handleOpenFinalLetter}
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#f04299] text-white font-semibold shadow-lg transition-all transform hover:scale-105 active:scale-95 hover:shadow-pink-300/50 focus:outline-none focus:ring-4 focus:ring-pink-300 text-sm cursor-pointer"
                >
                  Open the Final Letter 💌
                </button>
                <button
                  onClick={handleStayHere}
                  className="w-full text-xs text-[#9a4c73] hover:text-[#f04299] transition-colors cursor-pointer"
                >
                  Stay here a bit longer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
