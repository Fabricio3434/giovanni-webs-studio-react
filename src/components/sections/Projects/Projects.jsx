import { useEffect, useState } from "react";
import { projects } from "../../../data/projects.js";
import "./projects.css";

export function Projects({ onOpenCaseStudy }) {
  const [expandedDescriptionId, setExpandedDescriptionId] = useState(null);

  const toggleDescription = (projectId) => {
    setExpandedDescriptionId((currentId) =>
      currentId === projectId ? null : projectId,
    );
  };

  useEffect(() => {
    const handleClickOutsideDescription = (event) => {
      if (!event.target.closest(".description-text")) {
        setExpandedDescriptionId(null);
      }
    };

    document.addEventListener("pointerdown", handleClickOutsideDescription);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleClickOutsideDescription,
      );
    };
  }, []);

  return (
    <section className="projects">
      <h2 className="projects__title">Proyectos destacados</h2>

      <p className="projects__text">
        Una selección de proyectos que reflejan mi forma de resolver problemas,
        cuidar los detalles y desarrollar experiencias web funcionales. Detrás
        de cada uno hay un proceso de análisis, decisiones de diseño y
        soluciones que dieron forma al resultado final.
      </p>

      <div className="projects__container">
        {projects.map((project) => (
          <article className="projects__card" key={project.id}>
            <div className="projects__card-container">
              <img
                src={project.image}
                className="projects__card-img"
                width="580"
                height="326"
                alt={`portada de ${project.name}`}
              />

              <h3 className="projects__card-title">{project.name}</h3>

              <p className="projects__card-description">
                <button
                  type="button"
                  className={`description-text ${
                    expandedDescriptionId === project.id
                      ? "description-text--expanded"
                      : ""
                  }`}
                  onClick={() => toggleDescription(project.id)}
                  aria-expanded={expandedDescriptionId === project.id}
                >
                  {project.description}
                </button>
              </p>

              <div className="projects__button-container">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__card-button"
                >
                  Ver página
                </a>

                <button
                  type="button"
                  className="projects__card-button button--secondary"
                  onClick={() => onOpenCaseStudy(project.id)}
                >
                  Caso de estudio
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
