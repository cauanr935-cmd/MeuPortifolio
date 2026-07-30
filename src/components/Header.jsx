const Header = ({ theme, onToggleTheme }) => (
  <header className="header">
    <div className="container">
      <div className="logo">
        <h1>Cauan Martins</h1>
      </div>
      <div className="header-actions">
        <button
          className="theme-toggle"
          id="themeToggle"
          type="button"
          aria-label="Alternar modo claro e escuro"
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  </header>
);

export default Header;
