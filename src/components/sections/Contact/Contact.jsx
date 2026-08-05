import "./contact.css";

export function Contact() {
  return (
    <section className="contact">
      <div className="contact__text">
        <p className="contact__title">¿Tenés un proyecto en mente?</p>
        <p className="contact__subtitle">
          ¡Hablemos y lo llevemos al siguiente nivel!
        </p>
      </div>
      <a
        href="https://wa.me/5493834368435"
        target="_blank"
        rel="noopener noreferrer"
        className="contact__button"
      >
        Contactame
      </a>
    </section>
  );
}
