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
              Busco entender el porqué de las cosas.
            </li>
          </ul>
        </div>

        <div className="highlights__item">
          <h2 className="highlights__title">Lo que busco en cada proyecto</h2>

          <ul className="highlights__list">
            <li className="highlights__list-item">
              Ideas con identidad propia.
            </li>

            <li className="highlights__list-item">
              Soluciones claras y funcionales.
            </li>

            <li className="highlights__list-item">
              Detalles que aporten valor.
            </li>

            <li className="highlights__list-item">
              Proyectos con un propósito.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}