<div align="center">

# 💕 A Little Effort

### Sometimes, a little effort means a lot.

An interactive birthday experience made with love —
filled with memories, messages, music, animations, and a letter waiting to be opened.

<br />

<a href="https://a-little-effort.vercel.app">
  <img src="https://img.shields.io/badge/✨_Live_Website-A_Little_Effort-f04299?style=for-the-badge" />
</a>
&nbsp;
<a href="https://github.com/Hidden-Rhythm/A-little-effort">
  <img src="https://img.shields.io/badge/💻_Source-GitHub-181717?style=for-the-badge&logo=github" />
</a>

<br /><br />

<img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" />
<img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss" />
<img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square" />

</div>

---

## 🌸 What is this?

**A Little Effort** is a personalized interactive birthday website designed to feel more like an experience than a normal webpage.

Instead of simply displaying a birthday message, it takes the recipient through a small journey:

**A surprise → memories → messages → music → a love letter → a final sealed message.**

Every interaction is animated, with soft visuals, floating elements, transitions, cards, confetti, and handwritten-style sections.

---

## ✨ The Experience

```text
                    ┌──────────────────────┐
                    │    🎀 Birthday Gift   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   💖 Open My Heart   │
                    └──────────┬───────────┘
                               │
                               ▼
                 ┌───────────────────────────┐
                 │     💌 Special Messages   │
                 └─────────────┬─────────────┘
                               │
                               ▼
                 ┌───────────────────────────┐
                 │   🃏 Interactive Cards    │
                 └─────────────┬─────────────┘
                               │
                               ▼
                 ┌───────────────────────────┐
                 │       🎵 Playlist         │
                 └─────────────┬─────────────┘
                               │
                               ▼
                 ┌───────────────────────────┐
                 │    💌 Final Love Letter  │
                 └─────────────┬─────────────┘
                               │
                               ▼
                 ┌───────────────────────────┐
                 │     💋 Sealed Letter     │
                 └───────────────────────────┘
```

---

## 💫 Features

| Feature             | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| 🎁 Interactive Hero | Animated birthday introduction with a gift-opening interaction      |
| ✨ Floating Effects  | Particles, hearts, stars, clouds and decorative animations          |
| 💌 Message Cards    | Personalized messages revealed through an interactive flow          |
| 🃏 Flip Cards       | Three interactive memory/message cards                              |
| 🎵 Music Playlist   | Multiple music selections with custom artwork                       |
| ⌨️ Typewriter Text  | Animated text reveal with a blinking cursor                         |
| 🎉 Confetti         | Celebration animation when the experience begins                    |
| 💕 Love Letter      | Personalized final letter with animated transitions                 |
| 💋 Virtual Kiss     | Interactive kiss particle animation                                 |
| 🔐 Sealed Letter    | Final "sealed with love" screen                                     |
| 🔄 Experience Again | Restart the entire experience                                       |
| 📱 Responsive       | Designed for desktop and mobile screens                             |
| 🌸 Custom Assets    | Images, illustrations, music and decorative assets included locally |

---

## 🃏 Interactive Memories

The experience contains three flip cards, each revealing a different personal message.

The cards include:

* 💕 A direct message
* ✨ A message about the little things
* 🌸 A collection of favorite details and memories

All three cards need to be opened before the experience continues.

---

## 🎵 Music

The project includes a built-in playlist with three local audio tracks.

```text
public/assets/

├── music1-Bpgt1BZ5.mp3
├── music2-mdcMq3L1.mp3
└── music3-ClPh4k2q.mp3
```

Each track also has its own artwork:

```text
music1.png
music2.png
music3.png
```

Everything is served directly from the project's `public/assets` directory.

---

## 💌 The Letter Journey

The final part of the experience is split into multiple stages.

### 1. Final Love Letter

A handwritten-style personal message is displayed inside a soft paper-inspired interface.

### 2. Seal the Letter

The recipient can seal the letter with an animated interaction.

### 3. Sealed Letter

The experience ends with:

> **Letter Sealed with Love**

along with animated hearts, the date, and a virtual kiss interaction.

The recipient can also restart the experience and go through everything again.

---

## 🎨 Design

The interface uses a soft, dreamy visual language built around:

* 🌸 Pink and pastel tones
* 💛 Warm cream backgrounds
* 💜 Soft purple accents
* 💙 Light blue decorative elements
* 💕 Rounded cards
* ✨ Floating particles
* 💌 Paper / letter aesthetics
* 🫧 Subtle shadows and gradients

The goal is to keep the experience personal and playful rather than feeling like a conventional web application.

---

## 🛠️ Tech Stack

| Technology                | Usage                          |
| ------------------------- | ------------------------------ |
| **Next.js 14**            | Application framework          |
| **React 18**              | UI components                  |
| **TypeScript**            | Type-safe development          |
| **Framer Motion**         | Animations and transitions     |
| **Tailwind CSS**          | Styling and responsive layouts |
| **Jest**                  | Testing                        |
| **React Testing Library** | Component testing              |
| **React Hot Toast**       | Notifications                  |
| **Next Image**            | Optimized local assets         |

---

## 📁 Project Structure

```text
A-little-effort/
│
├── components/
│   ├── Confetti.tsx
│   ├── FinalLetter.tsx
│   ├── FlipCards.tsx
│   ├── Hero.tsx
│   ├── MessageCard.tsx
│   ├── Playlist.tsx
│   ├── SealedLetter.tsx
│   ├── TypewriterText.tsx
│   │
│   └── __tests__/
│       └── MessageCard.test.tsx
│
├── data/
│   └── message.ts
│
├── lib/
│   └── toast.ts
│
├── pages/
│   ├── _app.tsx
│   └── index.tsx
│
├── public/
│   ├── assets/
│   │   ├── crown.svg
│   │   ├── intro-*.webp
│   │   ├── letter-*.webp
│   │   ├── music*.mp3
│   │   ├── music*.png
│   │   └── pic*.png
│   │
│   ├── favicon.ico
│   └── favicon.svg
│
├── styles/
│   └── globals.css
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── jest.config.js
└── package.json
```

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Hidden-Rhythm/A-little-effort.git
cd A-little-effort
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates a production build.

```bash
npm start
```

Starts the production server.

```bash
npm run lint
```

Runs the project's lint configuration.

```bash
npm test
```

Runs the Jest test suite.

```bash
npm run format
```

Formats the project using Prettier.

---

## 🧩 Personalization

Most of the main message content lives in:

```text
data/message.ts
```

This includes:

* Title
* Subtitle
* Main message
* CTA text
* Toast messages

The interactive card content is defined inside:

```text
components/FlipCards.tsx
```

The final letter can be customized inside:

```text
components/FinalLetter.tsx
```

The music and image assets can be replaced inside:

```text
public/assets/
```

---

## 🧪 Testing

The project includes Jest and React Testing Library.

Current component tests include:

```text
components/__tests__/MessageCard.test.tsx
```

Run the tests with:

```bash
npm test
```

---

## 🌐 Live

### ✨ Live Website

**A Little Effort**
https://a-little-effort.vercel.app

### 💻 Source Code

**GitHub Repository**
https://github.com/Hidden-Rhythm/A-little-effort

---

## 💭 Why "A Little Effort"?

Because sometimes you don't need something huge.

A small website.

A few memories.

Some music.

A letter.

A little animation.

A little effort.

And somehow, those little things can mean **a lot**. 💕

---

<div align="center">

### Made with love, code, and a little effort. 💗

**Hidden_Rhythm**

</div>
