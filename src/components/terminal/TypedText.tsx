import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypedTextProps } from '../../types';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const TypedText: React.FC<TypedTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  onComplete,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, onComplete, prefersReducedMotion]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
    >
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </motion.span>
  );
};
