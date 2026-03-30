import { useState } from 'react';
import './projects.scss';
import projectsData from '../../data/projectdata';

import githubLogo from '../../assets/Footer.logo/github.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>
      <p className="projects__subtitle">
        Une sélection de projets qui illustrent mes compétences et ma
        progression.
      </p>

      <div className="projects__container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
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
              onClick={() => setSelectedProject(project)}
            >
              <i className="project-card__icon">↗</i>
              Voir le projet en détail
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <div className="modal__image">
              <img
                src={selectedProject.images.preview}
                alt={selectedProject.title}
              />
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
