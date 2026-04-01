import { useState, useEffect } from 'react';
import './projects.scss';
import projectsData from '../../data/projectdata';

import githubLogo from '../../assets/Footer.logo/github.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const [projectIndex, setProjectIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);

  const project = projectsData[projectIndex];

  useEffect(() => {
    if (selectedProject) return;

    const interval = setInterval(() => {
      setProjectIndex((prev) =>
        prev === projectsData.length - 1 ? 0 : prev + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>
      <p className="projects__subtitle">
        Une sélection de projets qui illustrent mes compétences et ma
        progression.
      </p>

      <div className="projects__container">
        <div className="project-card">
          <div className="project-card__cover">
            <img src={project.images.cover} alt={project.title} />
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
              />
            </div>
          </div>

          <button
            className="project-card__btn"
            onClick={() => {
              setSelectedProject(project);
              setModalIndex(0);
            }}
          >
            <i className="project-card__icon">↗</i>
            Voir le projet en détail
          </button>
        </div>

        <div className="projects__nav-dots">
          {projectsData.map((_, i) => (
            <span
              key={i}
              className={i === projectIndex ? 'active' : ''}
              onClick={() => setProjectIndex(i)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__image">
              <button
                className="modal__nav left"
                onClick={() =>
                  setModalIndex((prev) =>
                    prev === 0
                      ? selectedProject.images.previews.length - 1
                      : prev - 1,
                  )
                }
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>

              <img
                src={selectedProject.images.previews[modalIndex]}
                alt={selectedProject.title}
              />

              <button
                className="modal__nav right"
                onClick={() =>
                  setModalIndex((prev) =>
                    prev === selectedProject.images.previews.length - 1
                      ? 0
                      : prev + 1,
                  )
                }
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="modal__nav-dots">
              {selectedProject.images.previews.map((_, i) => (
                <span
                  key={i}
                  className={i === modalIndex ? 'active' : ''}
                  onClick={() => setModalIndex(i)}
                />
              ))}
            </div>

            <div className="modal__body">
              <p>{selectedProject.description.full}</p>

              <div className="modal__bottom">
                <div className="modal__tech">
                  {selectedProject.technologies.map((tech, index) => (
                    <img key={index} src={tech.icon} alt={tech.name} />
                  ))}
                </div>

                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal__github"
                >
                  <img src={githubLogo} alt="github" />
                  Dépôt Github
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
