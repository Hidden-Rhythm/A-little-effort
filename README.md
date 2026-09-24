# 👑 National Princess Day Surprise

<div align="center">

## 🌐 **[👉 VIEW LIVE SITE 👈](https://happy-princess-dayy.netlify.app/)**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-happy--princess--dayy.netlify.app-FF69B4?style=for-the-badge)](https://happy-princess-dayy.netlify.app/)

</div>

A delightful single-page Next.js site to celebrate National Princess Day with a special surprise message, beautiful animations, and confetti!

## ✨ Features

- 🎨 Beautiful pastel design with soft colors and rounded cards
- 🎭 Smooth animations using Framer Motion
- 🎊 Confetti celebration on gift reveal
- 📱 Fully responsive and mobile-first
- ♿ Accessible with keyboard navigation and ARIA labels
- 🔔 Toast notifications for user feedback
- 🖼️ Photo grid for memories
- 📋 Copy message functionality

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run linter
npm run lint

# Format code
npm run format

# Run tests
npm test
```

## 🎨 Customization

### Edit the Message

Edit the message content in `data/message.ts`:

```typescript
export const messageData = {
  title: 'Happy National Princess Day 👑',
  subtitle: 'To my favorite princess — today, and every day.',
  body: `Your custom message here...`,
  // ...
};
```

### Change Colors

Update CSS variables in `styles/globals.css`:

```css
:root {
  --bg: #fff9ff;
  --primary: #ffb6e6;
  --accent: #ffd8a8;
  --text: #2d2d2d;
}
```

### Replace Images

Add your own images to `public/assets/` and update the image paths in the respective components:
- Hero images: `components/Hero.tsx`
- Letter images: `components/MessageCard.tsx`
- Music covers: `components/Playlist.tsx`
- Flip card images: `components/FlipCards.tsx`

## 🚢 Deployment

### 🌐 Live Site

**👉 [View Live Site](https://happy-princess-dayy.netlify.app/) 👈**

The site is currently deployed on Netlify and accessible at the URL above.

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and connect your repository
4. Netlify will automatically detect Next.js and deploy
5. Your site will be live with a custom domain or netlify.app subdomain

### Deploy to Vercel (Alternative)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and deploy

**One-click deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Deploy to Render

1. Create a new account at [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Use these settings:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node

## 📁 Project Structure

```
princess-day/
├── components/
│   ├── Hero.tsx           # Hero section with crown animation
│   ├── MessageCard.tsx    # Animated message card with envelope
│   ├── Playlist.tsx       # Music playlist with carousel
│   ├── FlipCards.tsx      # 3D flip cards with messages
│   ├── FinalLetter.tsx    # Final love letter page
│   ├── SealedLetter.tsx   # Sealed letter confirmation page
│   ├── TypewriterText.tsx # Typewriter effect component
│   └── Confetti.tsx       # Confetti animation
├── data/
│   └── message.ts         # Message content (editable)
├── lib/
│   └── toast.ts           # Toast notifications
├── pages/
│   ├── _app.tsx           # App wrapper
│   └── index.tsx          # Main page
├── public/
│   └── assets/
│       ├── crown.svg      # Crown illustration
│       ├── intro-*.webp   # Hero section images
│       ├── letter-*.webp  # Letter decorative images
│       ├── music*.png     # Music track cover images
│       ├── music*.mp3     # Audio files
│       └── pic*.png       # Flip card images
├── styles/
│   └── globals.css        # Global styles & CSS variables
└── package.json
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hot Toast** - Toast notifications

## 📝 License

Made with 💕 for National Princess Day

