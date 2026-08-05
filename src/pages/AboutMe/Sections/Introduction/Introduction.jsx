import meImage from "../../../../assets/img/me.webp";

export function Introduction() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <figure className="about-me__image-container">
          <div className="about-me__background" />

          <img
            className="about-me__image"
            src={meImage}
            alt="Fotografía de Giovanni"
          />
        </figure>

        <div className="about-me__content">
          <h2 className="about-me__title">¿Por qué elegí el desarrollo web?</h2>

          <p className="about-me__text">
            Siempre me gustó crear y experimentar. La programación fue el camino
            que encontré para transformar esas ideas en proyectos reales.
          </p>
        </div>
      </div>
    </section>
  );
}
