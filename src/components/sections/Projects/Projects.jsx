import { getFavoriteProjects } from "../../../data/projects/index.js";
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard.jsx";

export function Projects() {
  const favoriteProjects = getFavoriteProjects();

  return (
    <section className="projects reveal-on-scroll">
      <h2 className="projects__title">Proyectos destacados</h2>

      <p className="projects__text">
        Una selección de proyectos que reflejan mi forma de resolver problemas,
        cuidar los detalles y desarrollar experiencias web funcionales. Detrás
        de cada uno hay un proceso de análisis, decisiones de diseño y
        soluciones que dieron forma al resultado final.
      </p>

      <div className="projects__container reveal-on-scroll">
        {favoriteProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}