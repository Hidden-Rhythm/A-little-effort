import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear' as const,
      times: [0, 0.5, 0.5, 1],
    },
  },
};

const CursorBlinker = () => (
  <motion.span
    variants={cursorVariants}
    animate="blinking"
    className="inline-block h-[1em] mb-4 w-[3px] translate-y-1 bg-white align-middle ml-1 rounded"
  />
);

interface TypewriterTextProps {
  text: string | string[];
  duration?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  duration = 1.5,
  delay = 1,
  className,
  onComplete,
  showCursor = true,
}) => {
  const currentText = Array.isArray(text) ? text[0] : text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    currentText.slice(0, latest)
  );

  useEffect(() => {
    const textLength = currentText.length;
    let hasCompleted = false;

    const controls = animate(count, textLength, {
      type: 'tween',
      duration,
      ease: 'linear',
      onUpdate(latest) {
        const roundedValue = Math.round(latest);
        if (roundedValue >= textLength && !hasCompleted) {
          hasCompleted = true;
          if (onComplete) {
            onComplete();
          }
        }
      },
    });
    return controls.stop;
  }, [text, duration, onComplete, count, currentText]);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      {showCursor && <CursorBlinker />}
    </span>
  );
};

export default TypewriterText;
