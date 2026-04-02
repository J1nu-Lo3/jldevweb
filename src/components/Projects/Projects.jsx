import { useState, useEffect } from 'react';
import './projects.scss';

import projectsData from '../../data/projectdata';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

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
        <ProjectCard
          project={project}
          onClick={() => {
            setSelectedProject(project);
            setModalIndex(0);
          }}
        />

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
        <ProjectModal
          project={selectedProject}
          modalIndex={modalIndex}
          setModalIndex={setModalIndex}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
