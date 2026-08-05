import "./hero.css";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__span">
          <p className="hero__span-category">DESARROLLADOR WEB</p>
          <span className="hero__separator" aria-hidden="true" />
          <p className="hero__span-country">ARGENTINA</p>
        </div>
        <h1 className="hero__title">
          Bienvenido a <br />
          Giovanni Webs Studio
        </h1>
        <h2 className="hero__subtitle">
          Hola, soy Giovanni, <br />
          fundador del estudio.
        </h2>
        <p className="hero__info">
          Soy autodidacta e independiente. Me enfoco en transformar ideas en
          experiencias digitales funcionales y simples, buscando que cada
          proyecto tenga identidad propia. Actualmente desarrollo utilizando
          HTML, CSS y JavaScript. También trabajo con JSON para la gestión de
          datos, GitHub para el control de versiones y Netlify para el
          despliegue de proyectos. También participé en proyectos grupales con
          React + Vite y Node, donde actué como referente del equipo,
          coordinando el trabajo y participando activamente en el desarrollo.
          Disfruto aprender nuevas tecnologías y adaptarme a las necesidades de
          cada proyecto.
        </p>
      </section>
    </>
  );
}
