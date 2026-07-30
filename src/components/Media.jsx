import { mediaItems } from '../data/media';

const Media = () => (
  <section id="midia" className="section">
    <div className="container">
      <h2 className="section-title">Na Mídia</h2>
      <p className="section-subtitle">Destaques da minha trajetória em matérias e reportagens.</p>
      <div className="media-grid">
        {mediaItems.map((item) => (
          <article key={item.id} className="media-card reveal">
            <figure className="media-card__cover">
              <img src={item.cover} alt={item.coverAlt} loading="lazy" />
            </figure>
            <div className="media-card__content">
              <span className="media-card__source">{item.source}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                className="media-card__link"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.linkAriaLabel}
              >
                {item.linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Media;
