import { useEffect, useState } from 'react';

export const useTypewriter = (text, speed = 60) => {
  const [count, setCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (count >= text.length) {
      const timeout = setTimeout(() => setShowCursor(false), 800);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setCount((current) => current + 1), speed);
    return () => clearTimeout(timeout);
  }, [count, text, speed]);

  return { displayedText: text.slice(0, count), showCursor };
};
