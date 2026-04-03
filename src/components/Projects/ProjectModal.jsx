import './projectsmodal.scss';
import githubLogo from '../../assets/Footer.logo/github.png';

export default function ProjectModal({
  project,
  modalIndex,
  setModalIndex,
  onClose,
}) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__image">
          <button
            className="modal__nav left"
            aria-label="Image précédente"
            onClick={() =>
              setModalIndex((prev) =>
                prev === 0 ? project.images.previews.length - 1 : prev - 1,
              )
            }
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <img
            src={project.images.previews[modalIndex].src}
            alt={project.images.previews[modalIndex].alt}
          />

          <button
            className="modal__nav right"
            aria-label="Image suivante"
            onClick={() =>
              setModalIndex((prev) =>
                prev === project.images.previews.length - 1 ? 0 : prev + 1,
              )
            }
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="modal__nav-dots">
          {project.images.previews.map((_, i) => (
            <span
              key={i}
              className={i === modalIndex ? 'active' : ''}
              onClick={() => setModalIndex(i)}
            />
          ))}
        </div>

        <div className="modal__body">
          <p>{project.description.full}</p>

          <div className="modal__bottom">
            <div className="modal__tech">
              {project.technologies.map((tech, index) => (
                <img key={index} src={tech.icon} alt={tech.name} />
              ))}
            </div>

            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="modal__github"
            >
              <img src={githubLogo} alt="" />
              Dépôt Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
