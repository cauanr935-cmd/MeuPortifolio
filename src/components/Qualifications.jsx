import { qualifications } from '../data/qualifications';

const Qualifications = () => (
  <section id="qualificacoes" className="section">
    <div className="container">
      <h2 className="section-title">Qualificações</h2>
      <div className="qualifications-container">
        {qualifications.map((qualification) => (
          <div key={qualification.id} className="qualification-item reveal">
            <h3>{qualification.title}</h3>
            <ul>
              {qualification.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Qualifications;
