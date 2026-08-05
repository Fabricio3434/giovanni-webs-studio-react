export function StudySection({ title, children }) {
  return (
    <section className="the-study__section">
      <h2 className="the-study__section-title">{title}</h2>

      <p className="the-study__section-text">
        {children}
      </p>
    </section>
  );
}