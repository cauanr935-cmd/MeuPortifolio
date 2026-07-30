const About = () => (
  <section id="sobre" className="section">
    <div className="container">
      <h2 className="section-title">Sobre</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Olá! Meu nome é Cauan Martins. Sou um profissional apaixonado por tecnologia e inovação, dedicado a
            criar soluções que agregam valor e transformam ideias em realidade.
          </p>
          <p>
            Com experiência em desenvolvimento web, tenho uma forte base em HTML, CSS e JavaScript, e estou
            sempre em busca de aprender novas tecnologias e melhorar minhas habilidades.
          </p>
          <p>
            Acredito na importância de criar interfaces intuitivas, acessíveis e de alta performance. Meu
            objetivo é contribuir para projetos desafiadores que façam diferença.
          </p>
        </div>
        <div className="about-contact">
          <h3>Entre em Contato</h3>
          <div className="contact-links">
            <a href="mailto:cauan@email.com" className="contact-link" aria-label="Enviar email para Cauan">
              <i className="ph-fill ph-envelope contact-icon" style={{ fontSize: '24px' }} aria-hidden="true" />
              <span>cauanr935@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cauanmartinss/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn de Cauan Martins"
            >
              <i className="ph-fill ph-linkedin-logo contact-icon" style={{ fontSize: '24px' }} aria-hidden="true" />
              <span>linkedin.com/in/cauanmartinss</span>
            </a>
            <a
              href="https://github.com/cauanr935-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub de Cauan Martins"
            >
              <i className="ph-fill ph-github-logo contact-icon" style={{ fontSize: '24px' }} aria-hidden="true" />
              <span>github.com/cauanr935-cmd</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
