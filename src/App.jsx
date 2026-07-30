import ColorblindFilters from './components/ColorblindFilters';
import AccessibilityPanel from './components/AccessibilityPanel';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Qualifications from './components/Qualifications';
import Certifications from './components/Certifications';
import Media from './components/Media';
import About from './components/About';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const { theme, toggleTheme } = useTheme();
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo principal
      </a>

      <ColorblindFilters />
      <AccessibilityPanel />

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <Projects />
        <Qualifications />
        <Certifications />
        <Media />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;
