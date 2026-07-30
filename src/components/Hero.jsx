import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const { displayedText, showCursor } = useTypewriter('Bem-vindo ao meu Portfólio');

  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-content">
            <h2 className="hero-headline typewriter reveal">
              {displayedText}
              {showCursor && <span className="typewriter-cursor">|</span>}
            </h2>
            <p>Olá! Eu sou Cauan Martins, um dev com vontade de criar algo grande.</p>
            <a href="#sobre" className="btn btn-primary">
              Conheça mais
            </a>
          </div>
        </div>
        <div className="hero-figure reveal">
          <div className="hero-image-wrapper">
            <img src="/static/euPortifolio.jpeg" alt="Foto de perfil de Cauan Martins" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
