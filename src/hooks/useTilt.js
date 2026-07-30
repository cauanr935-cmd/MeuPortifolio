import { useEffect, useRef } from 'react';

export const useTilt = () => {
  const ref = useRef(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return undefined;

    const handleMouseMove = (event) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = event.clientX - centerX;
      const distY = event.clientY - centerY;

      const rotateY = (distX / (rect.width / 2)) * 8;
      const rotateX = -(distY / (rect.height / 2)) * 8;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.style.transition = 'none';
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
