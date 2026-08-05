import "./caseStudy.css";
import "./technologies.css";
import { Technology } from "../../ui/Technology/Technology";
import { useEffect, useRef } from "react";
import { TimeLine } from "./TimeLine";

export function CaseStudy({ caseStudy, onClose }) {
  const contentRef = useRef(null);
  const firstTitleRef = useRef(null);
  const lastTitleRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!caseStudy) return null;

  return (
    <dialog open className="case-study">
      <div className="case-study__container container-wrapper">
        <button type="button" className="case-study__close" onClick={onClose}>
          <svg
            className="case-study__arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden="true"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <polygon points="513,216.6 158.5,216.6 316.1,59.1 197.9,59.1 1,256 197.9,452.9 316.1,452.9 158.5,295.4 513,295.4" />
            </g>
          </svg>
          Volver al inicio
        </button>
        <h2 className="case-study__title">{caseStudy.title}</h2>
        <div className="case-study__content" ref={contentRef}>
          <div className="case-study__content-item">
            <strong className="case-study__content-title" ref={firstTitleRef}>
              Objetivo
            </strong>
            <p className="case-study__content-objective">
              {caseStudy.objective}
            </p>
          </div>
          <div className="case-study__content-item">
            <strong className="case-study__content-title">Problema</strong>
            <p className="case-study__content-problem">{caseStudy.problem}</p>
          </div>
          <div className="case-study__content-item">
            <strong className="case-study__content-title">Solución</strong>
            <p className="case-study__content-solution">{caseStudy.solution}</p>
          </div>
          <div className="case-study__content-item">
            <strong className="case-study__content-title">Tecnologías</strong>
            <div className="case-study__content-technologies">
              {caseStudy.technologies.map((technology) => (
                <Technology key={technology} technology={technology} />
              ))}
            </div>
          </div>
          <div className="case-study__content-item">
            <strong className="case-study__content-title">
              Aspectos destacados
            </strong>
            <ul className="case-study__content-highlights">
              {caseStudy.highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="case-study__content-item">
            <strong className="case-study__content-title" ref={lastTitleRef}>
              Resultados
            </strong>
            <p className="case-study__content-results">{caseStudy.results}</p>
          </div>
          <TimeLine
            contentRef={contentRef}
            firstTitleRef={firstTitleRef}
            lastTitleRef={lastTitleRef}
          />
        </div>
      </div>
    </dialog>
  );
}
