import { useEffect, useState } from 'react';
import { safeStorage } from './useSafeStorage';

const getSavedSettings = () => ({
  accessMode: safeStorage.getItem('accessibility-mode') || 'default',
  colorFilter: safeStorage.getItem('color-filter') || 'default',
});

const colorFilterClasses = ['protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia'];

export const useAccessibilitySettings = () => {
  const [settings, setSettings] = useState(getSavedSettings);
  const [isPanelOpen, setPanelOpen] = useState(
    () => safeStorage.getItem('accessibility-panel-dismissed') !== 'true',
  );

  useEffect(() => {
    document.body.classList.toggle('high-contrast', settings.accessMode === 'high-contrast');
    document.body.classList.remove(...colorFilterClasses);
    if (settings.colorFilter !== 'default') {
      document.body.classList.add(settings.colorFilter);
    }
    safeStorage.setItem('accessibility-mode', settings.accessMode);
    safeStorage.setItem('color-filter', settings.colorFilter);
  }, [settings]);

  const setAccessMode = (accessMode) => {
    setSettings((current) => ({ ...current, accessMode }));
  };

  const setColorFilter = (colorFilter) => {
    setSettings((current) => ({ ...current, colorFilter }));
  };

  const resetSettings = () => {
    setSettings({ accessMode: 'default', colorFilter: 'default' });
  };

  const closePanel = ({ dismiss = false } = {}) => {
    if (dismiss) {
      safeStorage.setItem('accessibility-panel-dismissed', 'true');
    }
    setPanelOpen(false);
  };

  const openPanel = () => setPanelOpen(true);

  return {
    settings,
    setAccessMode,
    setColorFilter,
    resetSettings,
    isPanelOpen,
    openPanel,
    closePanel,
  };
};
