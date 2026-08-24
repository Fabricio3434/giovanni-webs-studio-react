import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { getCaseStudyById } from "../../../data/projects/caseStudiesIndex.js";
import { Technology } from "../../ui/Technology/Technology.jsx";
import { CaseStudyModal } from "../CaseStudy/CaseStudyModal.jsx";
import { useAnimatedUnmount } from "../../../hooks/useAnimatedUnmount.js";
import { AnimatedMotion } from "../../ui/AnimatedMotion/AnimatedMotion.jsx";

export function PreviewModal({ project, isOpen, onClose }) {
  const matchingCaseStudy = getCaseStudyById(project.id);
  const [isCaseStudyModal, setIsCaseStudyModal] = useState(false);
  const { shouldRender, isClosing } = useAnimatedUnmount(isOpen);

  useEffect(() => {
    if (!shouldRender) return undefined;

    document.body.style.overflow = "hidden";

    function handleKeyDown(e) {
      if (isOpen && e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, shouldRender]);

  if (!shouldRender) return null;

  return createPortal(
    <>
      <AnimatedMotion
        as="dialog"
        open
        className="preview-modal"
        isClosing={isClosing}
      >
        <div className="preview-modal__container">
          <button
            type="button"
            className="preview-modal__close"
            onClick={onClose}
            aria-label="Cerrar vista previa"
          >
            ✕
          </button>

          <img
            src={project.image}
            alt={project.name}
            className="preview-modal__img"
          />

          <div className="preview-modal__content">
            <span className="preview-modal__type">{project.type}</span>
            <h2 className="preview-modal__title">{project.name}</h2>
            <p className="preview-modal__description">{project.description}</p>

            {project.technologies && (
              <div className="preview-modal__technologies-container">
                <h2 className="preview-modal__technologies-title">
                  Tecnologías y herramientas
                </h2>
                <div className="preview-modal__technologies">
                  {project.technologies.map((tech) => (
                    <Technology key={tech} technology={tech} />
                  ))}
                </div>
              </div>
            )}

            <div className="preview-modal__d-s-container">
              <div className="preview-modal__duration">
                <h2 className="preview-modal__duration-title">Duración</h2>
                <p className="preview-modal__duration-text">
                  {project.duration}
                </p>
              </div>

              <div className="preview-modal__scope">
                <h2 className="preview-modal__scope-title">Alcance</h2>
                <p className="preview-modal__scope-text">{project.scope}</p>
              </div>
            </div>

            <div className="preview-modal__actions">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-modal__btn"
              >
                Ver página
              </a>

              <button
                onClick={() => setIsCaseStudyModal(true)}
                type="button"
                className="preview-modal__btn btn--secondary"
              >
                Ver caso de estudio
              </button>
            </div>
          </div>
        </div>
      </AnimatedMotion>
      <CaseStudyModal
        caseStudy={matchingCaseStudy}
        isOpen={isCaseStudyModal}
        onClose={() => setIsCaseStudyModal(false)}
      />
    </>,
    document.body,
  );
}
