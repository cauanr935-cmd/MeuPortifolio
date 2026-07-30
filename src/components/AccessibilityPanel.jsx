import { useEffect, useRef } from 'react';
import { useAccessibilitySettings } from '../hooks/useAccessibilitySettings';

const AccessibilityPanel = () => {
  const { settings, setAccessMode, setColorFilter, resetSettings, isPanelOpen, openPanel, closePanel } =
    useAccessibilitySettings();

  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isPanelOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isPanelOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isPanelOpen) {
        closePanel();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isPanelOpen, closePanel]);

  const handleOk = () => {
    closePanel({ dismiss: true });
    openButtonRef.current?.focus();
  };

  return (
    <>
      <button
        ref={openButtonRef}
        id="accessibilityOpen"
        className="accessibility-trigger"
        type="button"
        aria-expanded={isPanelOpen}
        aria-controls="accessibilityPanel"
        onClick={openPanel}
      >
        Ajustes de Acessibilidade
      </button>

      <aside
        id="accessibilityPanel"
        className="accessibility-panel"
        aria-label="Ajustes de acessibilidade"
        hidden={!isPanelOpen}
      >
        <div className="accessibility-panel__header">
          <h2>Ajustes de Acessibilidade</h2>
          <button
            ref={closeButtonRef}
            id="accessibilityClose"
            className="accessibility-close"
            type="button"
            aria-label="Fechar painel de acessibilidade"
            onClick={() => closePanel()}
          >
            ✕
          </button>
        </div>

        <div className="accessibility-panel__group">
          <p className="accessibility-panel__label">Tema de contraste</p>
          <button
            type="button"
            className="accessibility-option"
            aria-pressed={settings.accessMode === 'default'}
            onClick={() => setAccessMode('default')}
          >
            Padrão
          </button>
          <button
            type="button"
            className="accessibility-option"
            aria-pressed={settings.accessMode === 'high-contrast'}
            onClick={() => setAccessMode('high-contrast')}
          >
            Alto Contraste
          </button>
        </div>

        <div className="accessibility-panel__group">
          <p className="accessibility-panel__label">Simulação de daltonismo</p>
          {[
            { value: 'default', label: 'Normal' },
            { value: 'protanopia', label: 'Protanopia' },
            { value: 'deuteranopia', label: 'Deuteranopia' },
            { value: 'tritanopia', label: 'Tritanopia' },
            { value: 'achromatopsia', label: 'Acromatopsia' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              className="accessibility-option"
              aria-pressed={settings.colorFilter === option.value}
              onClick={() => setColorFilter(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="accessibility-panel__footer">
          <button type="button" id="accessibilityOk" className="accessibility-ok" onClick={handleOk}>
            OK
          </button>
          <button
            type="button"
            id="accessibilityReset"
            className="accessibility-reset"
            onClick={resetSettings}
          >
            Redefinir Ajustes
          </button>
        </div>
      </aside>
    </>
  );
};

export default AccessibilityPanel;
