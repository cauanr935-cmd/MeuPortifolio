import { certifications } from '../data/certifications';

const Certifications = () => (
  <section id="certificacoes" className="section">
    <div className="container">
      <h2 className="section-title">Certificações</h2>
      <div className="merits-container">
        {certifications.map((certification) => (
          <div key={certification.id} className="merit-item reveal">
            <h3>{certification.title}</h3>
            <p>{certification.description}</p>
            <img src={certification.image} alt={certification.imageAlt} className="certificate-image" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
