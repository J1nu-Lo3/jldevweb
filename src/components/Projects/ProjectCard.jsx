import './projectcard.scss';

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card">
      <div className="project-card__cover">
        <img src={project.images.cover.src} alt={project.images.cover.alt} />
      </div>

      <div className="project-card__content">
        <div className="project-card__left">
          <h3>{project.title}</h3>
          <p>{project.description.short}</p>
        </div>

        <div className="project-card__right">
          <img
            src={project.technologiesList}
            alt="Technologies"
            className="project-card__techlist"
            loading="lazy"
          />
        </div>
      </div>

      <button className="project-card__btn" onClick={onClick}>
        <i className="project-card__icon">↗</i>
        Voir le projet en détail
      </button>
    </div>
  );
}
