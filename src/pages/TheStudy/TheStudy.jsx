import { StudySection } from "./Section/StudySection.jsx";

export function TheStudy() {
  return (
    <main className="the-study__main container-wrapper">
      <h1 className="the-study__title">El origen de Giovanni Webs Studio</h1>
      <div className="the-study__section-container">
        <StudySection title="El cambio de mentalidad">
          Giovanni Webs Studio nació a partir de una idea simple: no quería
          limitarme a crear páginas web y ser visto únicamente como alguien que
          desarrolla proyectos por encargo. Buscaba construir una identidad
          propia, un lugar al que las personas pudieran recurrir por la forma de
          trabajar y el valor que cada proyecto transmite.
        </StudySection>
        <StudySection title="El nombre">
          El nombre Giovanni tiene un significado especial, ya que proviene de
          mi segundo nombre y representa la identidad detrás del estudio. En
          lugar de crear una marca completamente separada, decidí que Giovanni
          fuera el punto central de un proyecto que pudiera crecer y adaptarse
          con el tiempo.
        </StudySection>
        <StudySection title="Una marca que puede evolucionar">
          Giovanni Webs Studio nació enfocado en el desarrollo web, pero la idea
          nunca fue limitarlo únicamente a eso. El concepto detrás de la marca
          está pensado para evolucionar, permitiendo que en el futuro pueda
          abarcar nuevas áreas relacionadas con la tecnología sin perder su
          identidad principal.
        </StudySection>
        <StudySection title="Filosofía">
          Desde el comienzo hubo tres pilares principales: identidad,
          interacción y claridad. La intención siempre fue evitar proyectos
          genéricos y crear experiencias donde cada elemento tenga un motivo
          para estar presente.
        </StudySection>
        <StudySection title="El primer momento real">
          El punto donde esta visión comenzó a tomar forma fue con Roble Sur, un
          proyecto donde dejé de verlo únicamente como una práctica y empecé a
          trabajar cada decisión visual y funcional como parte de una
          experiencia completa.
        </StudySection>
        <StudySection title="Intención">
          Más que crear sitios web, la intención de Giovanni Webs Studio es
          desarrollar experiencias con identidad propia, donde cada proyecto
          pueda sentirse único y representar a quienes están detrás de él.
        </StudySection>
      </div>
    </main>
  );
}
