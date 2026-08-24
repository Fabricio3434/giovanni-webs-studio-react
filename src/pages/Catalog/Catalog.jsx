import { useState } from "react";
import { allProjects, categories } from "../../data/projects/index.js";
import { ProjectCard } from "../../components/ui/ProjectCard/ProjectCard.jsx";

export function Catalog() {
  const [activeCategories, setActiveCategories] = useState([]);

  function toggleCategory(category) {
    setActiveCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      }
      return [...prev, category];
    });
  }

  const isAllActive = activeCategories.length === 0;

  const visibleProjects = isAllActive
    ? allProjects
    : allProjects.filter((project) =>
        activeCategories.includes(project.category),
      );

  return (
    <div className="catalog-main">
      <div className="catalog__filters">
        <button
          type="button"
          className={`catalog__filter ${
            isAllActive ? "catalog__filter--active" : ""
          }`}
          onClick={() => setActiveCategories([])}
        >
          Todos
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`catalog__filter ${
              activeCategories.includes(category)
                ? "catalog__filter--active"
                : ""
            }`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="catalog__grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}