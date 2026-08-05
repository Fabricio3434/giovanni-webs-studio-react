import { projects } from "../../../data/projects.js";
import "./projects.css";

export function Projects({ onOpenCaseStudy }) {
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
                <span className="description-text">{project.description}</span>
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
