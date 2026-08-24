import meImage from "../../../../assets/img/me.webp";

export function Introduction() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <div className="about-me__content">
          <h2 className="about-me__title">¿Qué me mueve a crear?</h2>

          <p className="about-me__text">
            Siempre me gustó crear y experimentar. Encontré en los proyectos una forma de transformar ideas en algo real y descubrir hasta dónde puedo llevarlas.
          </p>
        </div>

        <img
          className="about-me__image"
          src={meImage}
          alt="Fotografía de Giovanni"
        />
      </div>
    </section>
  );
}