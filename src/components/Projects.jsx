import { projects } from '../data/projects';
import { useTilt } from '../hooks/useTilt';

const ProjectCard = ({ project }) => {
  const tiltRef = useTilt();

  return (
    <div ref={tiltRef} className="project-card card-3d reveal">
      <div className="project-brand">
        <img src={project.logo} alt={project.logoAlt} className="project-logo" />
        <span>{project.brand}</span>
      </div>
      <div className="project-header">
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projetos" className="section">
    <div className="container">
      <h2 className="section-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
