export function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__item-container">
        <div className="highlights__item">
          <h2 className="highlights__title">Mi forma de aprender</h2>

          <ul className="highlights__list">
            <li className="highlights__list-item">
              Investigo antes de decidir.
            </li>

            <li className="highlights__list-item">
              Comparo distintas soluciones.
            </li>

            <li className="highlights__list-item">
              Pruebo hasta encontrar la que mejor se adapta.
            </li>

            <li className="highlights__list-item">
              Me gusta entender el porqué de las cosas.
            </li>
          </ul>
        </div>

        <div className="highlights__item">
          <h2 className="highlights__title">Mis valores profesionales</h2>

          <ul className="highlights__list">
            <li className="highlights__list-item">Interfaces con identidad.</li>

            <li className="highlights__list-item">
              Experiencias claras e intuitivas.
            </li>

            <li className="highlights__list-item">
              Detalles que mejoran la experiencia.
            </li>

            <li className="highlights__list-item">
              Proyectos que representen al cliente.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
