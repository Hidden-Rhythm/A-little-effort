'use client';

import { useState } from 'react';
import Head from 'next/head';
import Hero from '@/components/Hero';
import MessageCard from '@/components/MessageCard';
import Confetti from '@/components/Confetti';
import { Toaster } from '@/lib/toast';

export default function Home() {
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    setShowConfetti(true);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  };

  const handleRestart = () => {
    setIsGiftOpened(false);
    setShowConfetti(false);
  };

  const toastOptions = {
    duration: 3000,
    style: {
      background: 'var(--primary)',
      color: 'var(--text)',
      borderRadius: '12px',
      padding: '12px 20px',
      fontSize: '14px',
    },
  };

  return (
    <>
      <Head>
        <title>Happy Birthday</title>
        <meta
          name="description"
          content="A special surprise for your birthday - A delightful interactive experience with love letters, music, and memories"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Birthday, love letter, surprise, romantic, interactive"
        />
        <meta name="author" content="Made by Aloo 💕" />

        {/* Favicon - Multiple formats for better browser support */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Happy Birthday" />
        <meta
          property="og:description"
          content="A special surprise for your birthday - A delightful interactive experience with love letters, music, and memories"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta
          property="og:url"
          content="https://a-little-effort.vercel.app"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Birthday" />
        <meta
          name="twitter:description"
          content="A special surprise for your birthday - A delightful interactive experience with love letters, music, and memories"
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#fff8e7" />
        <link rel="canonical" href="https://a-little-effort.vercel.app" />
      </Head>

      <main className="min-h-screen">
        {!isGiftOpened && (
          <Hero onOpenGift={handleOpenGift} isGiftOpened={isGiftOpened} />
        )}
        {isGiftOpened && (
          <MessageCard isRevealed={isGiftOpened} onRestart={handleRestart} />
        )}
        <Confetti trigger={showConfetti} onComplete={handleConfettiComplete} />

        <footer className="px-4 py-8 text-center text-text/60 relative z-50">
          <p className="text-sm">Friday, 25 September 2026</p>
          <p className="text-xs mt-2">Made by Aloo 💕</p>
        </footer>
      </main>

      <Toaster position="bottom-center" toastOptions={toastOptions} />
    </>
  );
}
