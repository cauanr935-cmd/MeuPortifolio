import { useEffect, useState } from 'react';
import { safeStorage } from './useSafeStorage';

const prefersDarkMode = () => {
  try {
    return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  } catch (error) {
    return false;
  }
};

const getInitialTheme = () => {
  const savedTheme = safeStorage.getItem('site-theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  return prefersDarkMode() ? 'dark' : 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    safeStorage.setItem('site-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
